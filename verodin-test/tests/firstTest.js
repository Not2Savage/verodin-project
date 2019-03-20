import { Selector } from 'testcafe'

const fieldEntry = Selector('tr:nth-child(1) > td:nth-child(2) > p > input')

fixture(`This is my first test`)
    .page(`http://thedemosite.co.uk/login.php`)

test(`just wait a while`, async t => {
    await t
        .typeText(fieldEntry, 'Hunter Savage')
        .wait(500)
})