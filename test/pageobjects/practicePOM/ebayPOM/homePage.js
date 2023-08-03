class homepage{
    get searchbar(){ return $('//input[@id="gh-ac"]')};
    get searchButton(){ return $('//input[@id="gh-btn"]')} 
    
}
export default new homepage();