# opengovintelligence.github.io

## To Build

This project uses the GruntJS build system. If you've not used this before, you are strongly advised to Google it! :-)

First time:

  bundle install
  npm install

Subsequently

  grunt

## To Edit page content

You can write pages using either Markdown (for simple pages) or Handlebars (more complex pages).
Pages with either a .md or a .hbs extension in src/html/pages will be compiled into html when you run the grunt command

## To Edit the CSS

As an underlying framework, we use http://www.basscss.com

## CSS house style

#### Don't leak BassCSS into the html

Compose the bits you need into more understandably named selectors instead. Yes, I know this isn't necessarily how it was intended to be used - we're mostly using it to enforce consistent margins and padding.

#### Don't add arbitary margins and padding

Use BassCSS instead.

Project Website for the H2020 [Open Government Intelligence Project](http://www.opengovintelligence.eu/)
