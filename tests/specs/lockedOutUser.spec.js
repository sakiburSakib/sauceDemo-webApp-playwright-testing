import { test, expect } from '@playwright/test';
import Login from '../pages/login';
import testData from '../../resource/testData.json' assert { type: 'json' };

test.describe('Locked Out User', () => {

    test('should display correct error message', async ({ page }) => {

        const loginPage = new Login(page);

        await loginPage.open();

        await loginPage.login(
            testData.users.locked_out.username,
            testData.users.locked_out.password
        );

        await expect(loginPage.errorMessage).toBeVisible();
        await expect(loginPage.errorMessage)
            .toContainText('locked out');
    });

});