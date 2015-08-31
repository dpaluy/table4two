###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (https://middlemanapp.com/advanced/dynamic_pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

configure :development do
  activate :livereload
  # set :debug_assets, true
end

activate :ogp do |ogp|
  ogp.namespaces = {
    fb: data.ogp.fb,
    og: data.ogp.og
  }
  ogp.base_url = data.generic.settings.domain
end

activate :google_analytics do |ga|
  # Property ID (default = nil)
  ga.tracking_id = 'UA-66894490-1'

  # Removing the last octet of the IP address (default = false)
  ga.anonymize_ip = false

  # Tracking across a domain and its subdomains (default = nil)
  #ga.domain_name = 'tablefortwo.org.il'

  # Tracking across multiple domains and subdomains (default = false)
  ga.allow_linker = false

  # Tracking Code Debugger (default = false)
  ga.debug = false

  # Tracking in development environment (default = true)
  ga.development = false

  # Compress the JavaScript code (default = false)
  ga.minify = true
end

# Methods defined in the helpers block are available in templates
helpers do
  def selected_menu(selected)
    if current_page.path.include? selected
      "selected"
    else
      ""
    end
  end
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"

  activate :robots, rules: [
    {user_agent: '*', allow: %w(/)}
  ],
  sitemap: "https://www.tablefortwo.org.il/sitemap.xml.gz"
end
