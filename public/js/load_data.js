// Here's my data model
var ViewModel = function(itemValue) {
    var self = this;
    self.itemValue1 = ko.observable(-1);
    self.itemValue = ko.observable(itemValue);

    self.Somma = function() {
      if(self.itemValue1() >= 0){
          var url = "/api/sum?x="+ self.itemValue1() + "&y=" + self.itemValue();
          console.log(url);
          $.getJSON(url, function(retData) {
              self.itemValue1(retData.risultato);
          });
          self.itemValue(0);
      }
      else{
        self.itemValue1(self.itemValue());
        self.itemValue(0);
      }
    };

    self.Mult = function() {
      if(self.itemValue1() >= 0){
          var url = "/api/multiply?x="+ self.itemValue1() + "&y=" + self.itemValue();
          console.log(url);
          $.getJSON(url, function(retData) {
              self.itemValue1(retData.risultato);
          });
          self.itemValue(0);
      }
      else{
        self.itemValue1(self.itemValue());
        self.itemValue(0);
      }
    };

    self.Result = function() {
      self.itemValue(self.itemValue1());
    };

    self.Reset = function() {
      self.itemValue(0);
      self.itemValue1(0);
    };
};

ko.applyBindings(new ViewModel()); // This makes Knockout get to work
