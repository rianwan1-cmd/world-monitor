#!/usr/bin/env python3
"""测试A股/港股页面布局修复"""

import time
from playwright.sync_api import sync_playwright

def test_stocks_layout():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page(viewport={'width': 1920, 'height': 1080})

        # 访问页面
        page.goto('http://localhost:8092')
        time.sleep(2)

        # 点击A股/港股标签
        stocks_tab = page.locator('.nav-tab[data-tab="stocks"]')
        stocks_tab.click()
        time.sleep(2)

        # 截图查看布局
        page.screenshot(path='layout_fix_stocks_tab.png', full_page=True)
        print("✓ 已截图：layout_fix_stocks_tab.png")

        # 检查表格是否正确显示
        holdings_table = page.locator('.holdings-section table')
        if holdings_table.is_visible():
            print("✓ 持仓表格可见")

        market_table = page.locator('#marketTableBody')
        if market_table.is_visible():
            print("✓ 市场表格可见")

        # 检查表格容器的overflow属性
        holdings_container = page.locator('.holdings-section > div')
        overflow = holdings_container.evaluate('el => window.getComputedStyle(el).overflow')
        print(f"✓ 持仓容器overflow: {overflow}")

        time.sleep(3)
        browser.close()
        print("\n测试完成！请查看截图验证布局是否正确。")

if __name__ == '__main__':
    test_stocks_layout()
