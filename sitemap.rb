require 'rubygems'
require 'sitemap_generator'

SitemapGenerator::Sitemap.default_host = 'https://www.tablefortwo.org.il'
SitemapGenerator::Sitemap.create do
  add '/', :changefreq => 'weekly', :priority => 0.9
  add '/about.html', :changefreq => 'weekly'
  add '/contacts.html', :changefreq => 'weekly'
  add '/ambassadors.html', :changefreq => 'weekly'
  add '/questions_and_answers.html', :changefreq => 'weekly'
end
