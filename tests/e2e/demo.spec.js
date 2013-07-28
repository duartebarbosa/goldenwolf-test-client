describe("Todo retrieval", function() {
  beforeEach(function() {
    browser().navigateTo('/');      
  });
  
  it("should load TODOs", function() {
    element(':button').click();
    expect(element('#todoCount').text()).toEqual('(1)');
  });
});