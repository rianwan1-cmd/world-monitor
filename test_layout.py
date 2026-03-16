#!/usr/bin/env python3
"""测试布局问题"""

import subprocess
import time

# 使用 screencapture 截图
print("等待3秒后截图...")
time.sleep(3)

# 截取整个屏幕
subprocess.run([
    "screencapture",
    "-x",  # 不播放声音
    "layout_test.png"
])

print("截图已保存: layout_test.png")
print("请查看截图并描述具体的布局问题")
