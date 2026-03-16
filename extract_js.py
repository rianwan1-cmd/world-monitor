import re

with open('index.html.bak2', 'r') as f:
    content = f.read()

script_match = re.search(r'<script>(.*?)</script>\s*</body>', content, re.DOTALL)
if script_match:
    with open('app_logic.js', 'w') as f:
        f.write(script_match.group(1))
    print("JS extracted successfully.")
else:
    print("Failed to find JS.")
