import { test, expect } from '@playwright/test';
import { login } from './helpers/auth';
import { pass, user } from './helpers/config';
import { addToCart, removeFromCart } from './helpers/cart';

test.describe('Saucedemo', () => {
    test('saucedemo login fails', async ({ page }) => {
        await login(page, 'invalid_user', "invalid_password");
        await expect(page.locator('.error-message-container')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    test('saucedemo login works', async ({ page }) => {
        await login(page, user, pass);
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('saucedemo add to cart works', async ({ page }) => {
        await login(page, user, pass);
        await addToCart;
    });

    test('saucedemo open cart works', async ({ page }) => {
        await login(page, user, pass);
        await addToCart;
        await page.locator('.shopping_cart_link').first().click();
        await expect(page.locator('#remove-sauce-labs-backpack'));
        await expect(page.locator('#remove-sauce-labs-bike-light'));
    });

    test('saucedemo remove from cart works', async ({ page }) => {
        await login(page, user, pass);
        await addToCart;
        await page.locator('.shopping_cart_link').first().click();
        await page.click('#remove-sauce-labs-bike-light');

        // const html = await page.content();
        // console.log(html);
    })
});