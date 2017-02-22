# Very-Basic-FormData-Polyfill
I was creating a unit test and wanted to confirm that file objects were being added to a FormData object.  My unit test worked great until I tried it in IE and realized FormData only implements .append there.

In browsers where .entries is not implemented this polyfill simply mocks FormData with .append and .entries.  It has no dependencies.
