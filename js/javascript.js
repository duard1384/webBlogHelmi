$(document).ready(function() {

    /**
     * This object controls the nav bar. Implement the add and remove
     * action over the elements of the nav bar that we want to change.
     *
     * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
     */
    var myNavBar = {

        flagAdd: true,

        elements: [],

        init: function(elements) {
            this.elements = elements;
        },

        add: function() {
            if (this.flagAdd) {
                for (var i = 0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
                document.getElementById('header').className += ' changePositionFixed';
            }
        },

        remove: function() {
            for (var i = 0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
            }
            this.flagAdd = true;
            document.getElementById('header').className =
                document.getElementById('header').className.replace(/(?:^|\s)changePositionFixed(?!\S)/g, '');
        }

    };

    /**
     * Init the object. Pass the object the array of elements
     * that we want to change when the scroll goes down
     */
    myNavBar.init([
        "header",
        "header-container",
        "brand"
    ]);

    /*
     * Function that manage the direction
     * of the scroll
     */
    function offSetManager() {

/*codigo original delete IF and ELSE*/

        if (location.pathname.substring((location.pathname.lastIndexOf("/") + 1), (location.pathname.length - 5)) == "index") {
            var yOffset = 0;
            var currYOffSet = window.pageYOffset;

            if (yOffset < currYOffSet) {
                myNavBar.add();
            } else if (currYOffSet == yOffset) {
                myNavBar.remove();
            }
        } else {
            myNavBar.add();
        }
    }

    /**
     * bind to the document scroll detection
     */
    window.onscroll = function(e) {

        offSetManager();
    }

    /**
     * We have to do a first detectation of offset because the page
     * could be load with scroll down set.    changeStyleNav(); 
     */
    offSetManager();

});
