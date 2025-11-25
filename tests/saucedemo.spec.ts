import { test, expect } from '@playwright/test';
import { login } from './helpers/auth';
import { pass, user, firstName, lastName, ZIP } from './helpers/config';
import { addToCart, openCart, removeFromCart } from './helpers/cart';
import { checkout, checkoutInfo } from './helpers/checkout';

test.describe('Saucedemo', () => {
    test('saucedemo login fails', async ({ page }) => { // 1
        await login(page, 'invalid_user', "invalid_password");
        await expect(page.locator('.error-message-container')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    test('saucedemo login works', async ({ page }) => { // 2
        await login(page, user, pass);
        await expect(page.locator('.title')).toHaveText('Products');
    });

    test('saucedemo add to cart works', async ({ page }) => { // 3
        await login(page, user, pass);
        await addToCart;
    });

    test('saucedemo open cart works', async ({ page }) => { // 4
        await login(page, user, pass);
        await openCart;
    });

    test('saucedemo remove from cart works', async ({ page }) => { // 5
        await login(page, user, pass);
        await addToCart(page);
        await openCart(page);
        await removeFromCart(page, '#remove-sauce-labs-bike-light');
    })

    test('saucedemo checkout works', async ({ page }) => { // 6
        await login(page, user, pass);
        await addToCart(page);
        await openCart(page);
        await removeFromCart(page, '#remove-sauce-labs-bike-light');
        await checkout(page);
    })

    test('saucedemo checkout info can be provided', async ({ page }) => { // 7
        await login(page, user, pass);
        await addToCart(page);
        await openCart(page);
        await removeFromCart(page, '#remove-sauce-labs-bike-light');
        await checkout(page);
        await checkoutInfo(page, firstName, lastName, ZIP);
    })
});