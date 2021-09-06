const { assert } = require("console");

describe('test3', () => {
    it('test', async () => {   
        await browser.url(`https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe`);
        await browser.execute(`window.editor.getDoc().setValue('<iframe src="https://bing.com" title="W3Schools Free Online Web Tutorials" width=500 height=500></iframe>')`);

        await $("#runbtn").click();


        let iframeRes1 = await $(`#iframeResult`);
        await browser.switchToFrame(iframeRes1);

        let iframeRes = await $(`//iframe`);
        await browser.switchToFrame(iframeRes);
        await expect($("#sb_form_q")).toBeExisting();
        await $('#sb_form_q').setValue('redmond');
        await expect($('.sa_tm')).toBeExisting();
        await expect($('.sa_tm')).toHaveTextContaining('redmond washington');
        await $(".sa_tm").click()
        await expect($('cite')).toBeExisting();
        await expect($('cite')).toHaveTextContaining('https://bing.com/travelguide?q=Redmond');
        await browser.pause(5000);
    })
});