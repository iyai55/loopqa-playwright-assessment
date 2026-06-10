import { test, expect, Page } from '@playwright/test';
import testCases from '../data/testCases.json';

async function login(page: Page) {
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.getByRole('textbox', { name: 'Username' }).fill("admin");
    await page.getByRole('textbox', { name: 'Password' }).fill("password123")
    await page.getByRole('button', { name: 'Sign in' }).click();
}
async function selectProject(page: Page, projectName: string) {
    await page.getByRole('button',
        {
            name: new RegExp(projectName)

        }).click();
}
for (const tc of testCases) {

    test(`verify ${tc.task}`, async ({ page }) => {

        await login(page);
        await selectProject(page, tc.project);

        const column = page.locator('.flex.flex-col').filter({
            has: page.getByRole('heading', { name: new RegExp(tc.column) })
        });
        const taskCard =
            column.locator('.bg-white.p-4.rounded-lg').filter({
                has: page.getByRole('heading', { name: tc.task }),
            });

        await expect(taskCard).toContainText(tc.task);

        for (const tag of tc.tags) {
            await expect(taskCard).toContainText(tag);
        }

    });

};




