Fix Delicious
============

Chrome extension for delicious.com web UI.

=== Redirect url ===
The extension replaces the redirect urls with direct urls.
https://avosapi.delicious.com/api/v1/posts/redirect?url=http%3A%2F%2Fwww.google.com%2F becomes http://www.google.com

=== Link Target Behavior ===

The extension fixes link target behavior.

When clicking on links, they open in same window.
When ctrl-clicking links, they open in new tab.
When shift-clicking on links, they open in new window.

Old behavior was that clicking links opened them in new tab, shift and ctrl-click opened them in new tab and switched to the tab.
