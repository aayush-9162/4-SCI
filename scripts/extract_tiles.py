"""Extract 12 individual tiles from the 4-SCI pictograms PNG.

Each source tile is a rounded colour square on a white background. Tiles differ
in size and the bottom row is shifted, so neighbours can bleed a thin coloured
strip into a naive crop. Strategy:
  1. Coarse-crop each cell from measured gap midpoints.
  2. Tight bounding box of non-white content.
  3. Determine the tile's exact dominant background colour.
  4. Trim leading/trailing rows & cols that aren't that background (removes white
     gaps and foreign-colour bleed from neighbours).
  5. Flood-fill the white rounded-corner arcs (exterior white) with the bg colour
     so the tile becomes a clean solid block with no visible seam.
  6. Pad to a centred square with the bg colour so a 1:1 card fills edge-to-edge
     with no white frame, no joint and no cropping.
"""
from pathlib import Path
from collections import Counter
from PIL import Image, ImageDraw

SRC = Path(r"c:\Users\aayus\Desktop\fff\4-SCI\12 Pictograms for 4SCI.png")
OUT = Path(r"c:\Users\aayus\Desktop\fff\4-SCI\public\domains")
OUT.mkdir(parents=True, exist_ok=True)

img = Image.open(SRC).convert("RGB")
W, H = img.size

col_bounds = [0, 369, 730, 1102, W]   # 4 columns
row_bounds = [0, 361, 699, H]         # 3 rows

TOL = 46          # bg colour match tolerance per channel (edge trim)
KEEP_FRAC = 0.18  # a row/col is "tile" if at least this fraction matches bg


def is_white(px):
    return px[0] > 235 and px[1] > 235 and px[2] > 235


def near(px, bg):
    return abs(px[0] - bg[0]) <= TOL and abs(px[1] - bg[1]) <= TOL and abs(px[2] - bg[2]) <= TOL


for r in range(3):
    for c in range(4):
        idx = r * 4 + c + 1
        sub = img.crop((col_bounds[c], row_bounds[r], col_bounds[c + 1], row_bounds[r + 1]))
        px = sub.load()
        sw, sh = sub.size

        # 1) tight bounding box of non-white content
        min_x, max_x, min_y, max_y = sw, -1, sh, -1
        for y in range(sh):
            for x in range(sw):
                if not is_white(px[x, y]):
                    min_x = min(min_x, x); max_x = max(max_x, x)
                    min_y = min(min_y, y); max_y = max(max_y, y)
        crop = sub.crop((min_x, min_y, max_x + 1, max_y + 1))
        cpx = crop.load()
        cw, ch = crop.size

        # 2) exact dominant background colour (ignore near-white)
        cnt = Counter()
        for y in range(0, ch, 2):
            for x in range(0, cw, 2):
                p = cpx[x, y]
                if is_white(p):
                    continue
                cnt[p] += 1
        bg = cnt.most_common(1)[0][0] if cnt else (255, 255, 255)

        # 3) trim edges that aren't the tile background (white gaps / colour bleed)
        def col_is_tile(x):
            hits = sum(1 for y in range(0, ch, 2) if near(cpx[x, y], bg))
            return hits / max(1, ch // 2) >= KEEP_FRAC

        def row_is_tile(y):
            hits = sum(1 for x in range(0, cw, 2) if near(cpx[x, y], bg))
            return hits / max(1, cw // 2) >= KEEP_FRAC

        left = 0
        while left < cw - 1 and not col_is_tile(left): left += 1
        right = cw - 1
        while right > left and not col_is_tile(right): right -= 1
        top = 0
        while top < ch - 1 and not row_is_tile(top): top += 1
        bottom = ch - 1
        while bottom > top and not row_is_tile(bottom): bottom -= 1

        crop = crop.crop((left, top, right + 1, bottom + 1))
        cw, ch = crop.size

        # 4) flood-fill the exterior white + anti-aliased edge ring with the bg
        #    colour (high threshold consumes the transition pixels too).
        for seed in [(0, 0), (cw - 1, 0), (0, ch - 1), (cw - 1, ch - 1)]:
            if is_white(crop.getpixel(seed)):
                ImageDraw.floodfill(crop, seed, bg, thresh=120)

        # 5) build a content mask: everything that ISN'T the background colour
        #    (the white icons/number/text and their anti-aliased halo).
        MASK_TOL = 60
        cpx = crop.load()
        mask = Image.new("L", (cw, ch), 0)
        mpx = mask.load()
        for y in range(ch):
            for x in range(cw):
                p = cpx[x, y]
                if not (abs(p[0] - bg[0]) <= MASK_TOL and abs(p[1] - bg[1]) <= MASK_TOL and abs(p[2] - bg[2]) <= MASK_TOL):
                    mpx[x, y] = 255

        # 6) composite ONLY the content onto a single uniform bg square — the
        #    whole background is one fill, so there is no paste seam anywhere.
        side = max(cw, ch)
        square = Image.new("RGB", (side, side), bg)
        square.paste(crop, ((side - cw) // 2, (side - ch) // 2), mask)

        square.save(OUT / f"{idx:02d}.png", "PNG")
        print(f"Tile {idx:2d}: crop={cw}x{ch} bg={bg} -> {side}x{side}")
