# Image-Search-Abstraction-Layer

## User stories:
1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
3. I can get a list of the most recently submitted search strings.

## Example query usage:

```text
https://extwiii-imageshare.herokuapp.com/api/imagesearch/dog?offset=10
https://extwiii-imageshare.herokuapp.com/api/latest/imagesearch
```

## Example query output:

```js
[{"url":"http://www.zastavki.com/pictures/2560x1600/2011/Animals_Cats_Cat_and_dog_030580_.jpg","snippet":"Cat and dog wallpapers and images - wallpapers, pictures, photos","thumbnail":"http://ts2.mm.bing.net/th?id=OIP.Mf106969e7dfb87f38d27f2487e36e6a1o0&pid=15.1","context":"http://www.zastavki.com/eng/Animals/Cats/wallpaper-30580.htm"},
{"url":"https://k9trainer.files.wordpress.com/2008/09/cosette-qm5p3044.jpg","snippet":"dog breeds | Talk about Dogs!","thumbnail":"http://ts3.mm.bing.net/th?id=OIP.Med2681e6e0f73b68cbf9feebd691fee1o0&pid=15.1","context":"https://k9trainer.wordpress.com/category/dog-breeds/"},
{"url":"http://animalia-life.com/data_images/dog/dog1.jpg","snippet":"Dog. Dog images. Pictures of dogs","thumbnail":"http://ts1.mm.bing.net/th?id=OIP.M56bc6381eed433287af364107669ea41o0&pid=15.1","context":"http://animalia-life.com/dogs.html"},
{"url":"http://www.101dogbreeds.com/wp-content/uploads/2015/01/Xoloitzcuintli-Photos.jpg","snippet":"... mexican hairless dog puppy mexican hairless dog xoloitzcuintli images","thumbnail":"http://ts3.mm.bing.net/th?id=OIP.M7a4571c6d520e5ddbbf99d5afab8a119H0&pid=15.1","context":"http://www.101dogbreeds.com/xoloitzcuintli-mexican-hairless-dog.asp"},
{"url":"http://www.101dogbreeds.com/wp-content/uploads/2014/11/Pocket-Beagle-Wallpaper.jpg","snippet":"Pocket Beagle Dog Info, Temperament, Training, Puppies, Pictures","thumbnail":"http://ts4.mm.bing.net/th?id=OIP.M4a97f8ae3568599fe9dd5a19fa83658do0&pid=15.1","context":"http://www.101dogbreeds.com/pocket-beagle.asp"},
{"url":"http://www.thisiscolossal.com/wp-content/uploads/2015/02/dog-1.jpg","snippet":"dog-1","thumbnail":"http://ts2.mm.bing.net/th?id=OIP.M76eaf1f43a6b17223d8857803bff7577o0&pid=15.1","context":"http://www.thisiscolossal.com/2015/02/comical-portraits-of-hairless-dogs-by-sophie-gamand/"},
{"url":"http://wallarthd.com/wp-content/uploads/2014/08/White-Dog-Snow-Wallpaper-Picture.jpg","snippet":"White Dog Snow Wallpaper Picture","thumbnail":"http://ts2.mm.bing.net/th?id=OIP.M26763e84290b6b9a471b8a3ff09edcd2o0&pid=15.1","context":"http://wallarthd.com/imagepics/white-dogs-running-wallpaper-picture.html"},
{"url":"http://stuffpoint.com/dogs/image/338835-dogs-cute-dog.jpg","snippet":"Cute dog!, isnt it cute?","thumbnail":"http://ts4.mm.bing.net/th?id=OIP.M8b5406a28cd14ae34b71d40a37216c84H0&pid=15.1","context":"http://stuffpoint.com/dogs/image/338835/cute-dog-picture/"},
{"url":"https://designerdoginfo.files.wordpress.com/2012/06/8-5.jpg","snippet":"difference between male and female puppies | Designer Dog Info","thumbnail":"http://ts4.mm.bing.net/th?id=OIP.M790a80d0a24b2ccecb66a9863ea9c20do0&pid=15.1","context":"https://designerdoginfo.wordpress.com/tag/difference-between-male-and-female-puppies/"},
{"url":"http://dogbreedgallery.com/wp-content/gallery/airedale-terrier/airedale-terrier-8.jpg","snippet":"Airedale Terrier | Dog Breed Gallery","thumbnail":"http://ts1.mm.bing.net/th?id=OIP.Mff00e47467512ccf8fb7247498f855d1o0&pid=15.1","context":"http://dogbreedgallery.com/dog-breeds/airedale-terrier-2/"}]
```
## Example latest output:

```js
[{"term":"bird","when":"2016-10-19T11:07:57.587Z"},
{"term":"dog","when":"2016-10-19T11:06:26.771Z"},
{"term":"frog","when":"2016-10-19T11:06:17.819Z"},
{"term":"frog","when":"2016-10-19T00:41:16.607Z"},
{"term":"frog","when":"2016-10-19T00:41:10.685Z"},
{"term":"frog","when":"2016-10-19T00:38:00.682Z"},
{"term":"dog","when":"2016-10-19T00:37:54.286Z"},
{"term":"cat","when":"2016-10-19T00:37:41.529Z"},
{"term":"cat","when":"2016-10-19T00:04:09.848Z"},
{"term":"lolcats funny","when":"2016-10-19T00:03:44.052Z"}]
```

Difficulty :full_moon::full_moon::full_moon::full_moon::full_moon::full_moon::new_moon::new_moon::new_moon::new_moon:

### Bilal Cagiran  | [E-Mail](mailto:bcagiran@hotmail.com) | [Github](https://github.com/extwiii/) | [LinkedIn](https://linkedin.com/in/bilalcagiran) | [CodePen](http://codepen.io/extwiii/) | [Blog/Site](http://bilalcagiran.com) | [FreeCodeCamp](https://www.freecodecamp.com/extwiii) 

