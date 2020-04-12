# Gatsby Theme to do / event listing

### To use this theme you can follow this step

#### create your folder

`mkdir events`

`cd events`

`yarn init -y`

`yarn add react react-dom gatsby @alfianjau/gatsby-theme-events`

#### Create a new gatsby-config.js file in your project root

~~~
module.exports = {
  plugins: ["@alfianjau/gatsby-theme-events"],
} 
~~~

#### make sure you are in your events project directory and run this

` gatsby develop `

#### Add data with yaml 

In your project, create a directory, `data`. Inside data, create a new file, `events.yml`

include this sample file for your example file

```
- name: Event 1
  location: My House
  start_date: 2019-06-22
  end_date: 2019-06-26
  url: https://hakooi.com
- name: Event 2
  location: My Home
  start_date: 2019-06-23
  end_date: 2019-06-26
  url: https://hakooi.com
- name: Event 3
  location: My Island
  start_date: 2019-06-25
  end_date: 2019-06-26
  url: https://hakooi.com
- name: Event 4
  location: My own way
  start_date: 2019-06-21
  end_date: 2019-06-26
  url: https://hakooi.com
```

Made with love by  [Hakooi](https://hakooi.com "Hakooi | Ruby on rails studio").