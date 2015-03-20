var R = {};

<% _.each(config, function(path, name) { %>
R.<%= name %> = require('./<%= path %>');
<% }); %>

module.exports = R;
