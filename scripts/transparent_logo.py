"""Make the logo's exterior white background transparent (corner flood-fill),
preserving interior whites (clouds, highlights). Then tight-crop and save."""
from collections import deque
from PIL import Image

SRC = r"c:\Users\aayus\Desktop\fff\4-SCI\public\logo.png"
OUT = r"c:\Users\aayus\Desktop\fff\4-SCI\public\logo.png"

img = Image.open(SRC).convert("RGBA")
w, h = img.size
px = img.load()

def is_bg(p):
    return p[0] > 238 and p[1] > 238 and p[2] > 238 and p[3] > 0

# BFS flood-fill from all four corners through connected near-white pixels
seen = [[False] * w for _ in range(h)]
q = deque()
for sx, sy in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
    if is_bg(px[sx, sy]):
        q.append((sx, sy)); seen[sy][sx] = True

while q:
    x, y = q.popleft()
    px[x, y] = (255, 255, 255, 0)
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nx, ny = x + dx, y + dy
        if 0 <= nx < w and 0 <= ny < h and not seen[ny][nx] and is_bg(px[nx, ny]):
            seen[ny][nx] = True
            q.append((nx, ny))

# Tight-crop to the visible content
bbox = img.getbbox()
img = img.crop(bbox)
img.save(OUT, "PNG")
print("size:", img.size)
