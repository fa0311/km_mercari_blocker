
var cash_url;
var url = "https://www.mercari.com/jp/u/881514443/";
page_check();
function page_check() {
    setTimeout(page_check, 500);
    if (location.href != cash_url) {
        cash_url = location.href;
        block();
    }
}
function block() {
    if (location.href == url || $('table.item-detail-table').find('a').attr('href') == url) {
        $('body').prepend('<div class="kemusite_fixed"><h1>このサイトは不適切なため表示できません</h1></div>');
    }
}