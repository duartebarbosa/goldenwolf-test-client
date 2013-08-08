describe("Todo retrieval", function() {
  beforeEach(function() {
    browser().navigateTo('/');      
  });
  
  it("should load TODOs", function() {
  	console.log("WHOOP WHOOP WHOOP!");
    element(':button').click();
    expect(element('#todoCount').text()).toEqual('(1)');
  });
});