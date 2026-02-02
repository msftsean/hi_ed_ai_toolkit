import { test, expect } from '@playwright/test';
import * as path from 'path';

const indexPath = 'file:///' + path.resolve(__dirname, '../../docs/index.html').replace(/\\/g, '/');

test.describe('Higher Ed AI Toolkit Site', () => {
  test('page loads with correct title', async ({ page }) => {
    await page.goto(indexPath);
    await expect(page).toHaveTitle(/Higher Ed|AI Toolkit/i);
  });

  test('main sections are visible', async ({ page }) => {
    await page.goto(indexPath);
    await expect(page.locator('body')).toBeVisible();
  });

  test('framework items have Microsoft links', async ({ page }) => {
    await page.goto(indexPath);
    
    // Check ETHICAL Framework link
    const ethicalLink = page.locator('a:has-text("ETHICAL Framework")');
    await expect(ethicalLink).toHaveAttribute('href', /learn\.microsoft\.com/);
    
    // Check Risk Assessment link
    const riskLink = page.locator('a:has-text("Risk Assessment Templates")');
    await expect(riskLink).toHaveAttribute('href', /learn\.microsoft\.com/);
    
    // Check Decision Trees link
    const decisionLink = page.locator('a:has-text("Decision Trees")');
    await expect(decisionLink).toHaveAttribute('href', /learn\.microsoft\.com/);
    
    // Check Policy Templates link
    const policyLink = page.locator('a:has-text("Policy Templates")');
    await expect(policyLink).toHaveAttribute('href', /learn\.microsoft\.com/);
  });

  test('no personal email in page content', async ({ page }) => {
    await page.goto(indexPath);
    const content = await page.content();
    expect(content).not.toContain('sean.gayle@microsoft.com');
    expect(content).not.toContain('segayle@');
  });

  test('robots meta tag is present', async ({ page }) => {
    await page.goto(indexPath);
    const robotsMeta = page.locator('meta[name="robots"]');
    await expect(robotsMeta).toHaveAttribute('content', /noindex/);
  });
});
