(function () {
    if (!new window.FormData().entries) {
        console.log('Adding FormData PolyFill');
        function FormData() {
            this.entriesList = [];
        }

        FormData.prototype.entries = function () {
            var nextIndex = 0;
            var entriesList = this.entriesList;
            return {
                next: function () {
                    return nextIndex < entriesList.length ? { value: entriesList[nextIndex++], done: false } : { done: true };
                }
                };
            }

        FormData.prototype.append = function (key, value) {
            this.entriesList.push([key, value] );
        }
        window.FormData = FormData;
    }
})();
