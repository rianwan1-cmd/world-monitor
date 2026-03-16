#!/usr/bin/env python3
"""测试评分显示"""

from playwright.sync_api import sync_playwright
import time

def test_score():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        context = browser.new_context()
        page = context.new_page()

        # 监听控制台消息
        console_messages = []
        def handle_console(msg):
            console_messages.append(f"[{msg.type}] {msg.text}")
        page.on("console", handle_console)

        print("1. 访问页面...")
        page.goto("http://localhost:8092")
        page.wait_for_load_state("networkidle")
        time.sleep(2)

        print("\n2. 点击 'A股/港股' 标签...")
        stocks_tab = page.locator('text="A股/港股"')
        stocks_tab.click()
        time.sleep(3)  # 等待数据加载

        # 检查初始数据是否加载
        table_body = page.locator('#stocksPanel tbody')
        rows = table_body.locator('tr')
        initial_count = rows.count()
        print(f"   初始表格行数: {initial_count}")

        print("\n3. 输入搜索关键词 '银行'...")
        search_input = page.locator('#marketSearch')
        search_input.fill("银行")
        time.sleep(0.5)

        print("\n4. 点击 '全市场搜索' 按钮...")
        search_btn = page.locator('#marketSearchBtn')
        search_btn.click()

        print("   等待20秒加载数据...")
        time.sleep(20)

        print("\n5. 检查表格数据...")
        table_body = page.locator('#stocksPanel tbody')
        rows = table_body.locator('tr')
        row_count = rows.count()

        print(f"   表格行数: {row_count}")

        if row_count > 0:
            print("\n   检查前5行的评分列:")
            for i in range(min(5, row_count)):
                row = rows.nth(i)
                cells = row.locator('td')
                cell_count = cells.count()

                if cell_count >= 8:
                    code = cells.nth(0).inner_text()
                    name = cells.nth(1).inner_text()
                    price = cells.nth(2).inner_text()
                    change = cells.nth(3).inner_text()
                    volume = cells.nth(4).inner_text()
                    turnover = cells.nth(5).inner_text()
                    score = cells.nth(6).inner_text()
                    signal = cells.nth(7).inner_text()
                    print(f"     {i+1}. {code} {name} {price} {change}")
                    print(f"         成交额: {volume} 换手: {turnover}")
                    print(f"         评分: [{score}] 信号: [{signal}]")
                else:
                    print(f"     {i+1}. 列数不足: {cell_count} (期望8列)")

        # 检查 JavaScript 变量
        print("\n6. 检查 JavaScript 数据...")
        market_rows = page.evaluate("() => window.marketRows")
        if market_rows and len(market_rows) > 0:
            print(f"   marketRows 数组长度: {len(market_rows)}")
            print(f"   第一条数据: {market_rows[0]}")
        else:
            print("   marketRows 为空")

        # 打印最后10条控制台消息
        print("\n7. 最近的控制台消息:")
        for msg in console_messages[-10:]:
            print(f"   {msg}")

        print("\n\n=== 浏览器保持打开，请手动检查 ===")
        print("按 Enter 键关闭...")
        try:
            input()
        except:
            pass

        browser.close()

if __name__ == "__main__":
    test_score()
