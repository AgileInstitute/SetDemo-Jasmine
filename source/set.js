Set = function() {
    this.items = [];
};

Set.prototype = {
    size: function() {
        return this.items.length;
    },

    add: function(item) {
        if (item == null) throw "null not allowed";
        if (!this.contains(item))
            this.items.push(item);
    },

    contains: function(item) {
        return (( this.items.indexOf(item) < 0 ) ? false : true);
    },
};