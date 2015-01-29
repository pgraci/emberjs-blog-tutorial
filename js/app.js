App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('albums');
  this.resource('album', { path: ':album_id' });
});

App.AlbumsRoute = Ember.Route.extend({
  model: function() {
    return albums;
  }
});

var albums = [
  {
    id: 1,
    date: new Date("01-10-2015"),
    name: "Bob Andy's Songbook",
    artist: {name: "Bob Andy"},
    excerpt: "An essential album for any lover of early Jamaican rocksteady and reggae music.",
    body: "Bob Andy's Song Book is a 1970 album of songs by Jamaican reggae singer and songwriter Bob Andy, recorded between 1966 and 1968. Andy had first found fame as the lead vocalist of The Paragons, but his peak as a solo artist came in the late 60s when he recorded a string of singles for Clement Coxsone Dodds Studio One label. In 1970, these singles were compiled on the Song Book album.[2] Many of the songs on the album have since been covered by a range of artists, including Taj Mahal, who covered Desperate Lover on his 1974 Mo Roots album. Vocal harmony on three tracks on the album are performed by Bunny Wailer and Peter Tosh of The Wailers, and backing comes from Studio One band the Soul Vendors, whose members included Jackie Mittoo and Roland Alphonso.[1] The album was re-issued on CD in 1997, with extended versions of Desperate Lover and Feeling Soul. In the Rough Guides book Reggae: 100 Essential CDs, the album is described as a masterpiece that belongs in anyones CD collection - and not just of reggae music, and it has also been described as one of the eras classic albums.",
    youtube: "https://www.youtube.com/embed/w5XjMYkNMFA",
    images:
      {
        full: "images/bob-andys-songbook-full.jpg",
        thumb: "images/bob-andys-songbook-thumb.jpg"
      }

  },
  {
    id: 2,
    date: new Date("01-09-2015"),
    name: "Studio One Story",
    artist: {name: "Various Artists"},
    excerpt: "Great comprehensive discography from one of the foundation labels of reggae music.",
    body: "This amazing collection compiled and reissued by Soul Jazz Records is a must for any collector of reggae music. Also includes 4-hour DVD of the story of Coxsone Dodd and the legendary Studio One Records, plus CD, plus 100-page book with text, film stills and rare photos.",
    youtube: "https://www.youtube.com/embed/pyOHJArXiSw",
    images:
      {
        full: "images/studio-one-story-full.jpg",
        thumb: "images/studio-one-story-thumb.jpg"
      }

  },
  {
    id: 3,
    date: new Date("01-03-2015"),
    name: "Dub Shots from Studio One",
    artist: {name: "Dub Specialist"},
    excerpt: "Dub Specialist is a name used for a series of limited edition 1970s Dub LP releases from Coxone Dodd's Studio One label.",
    body: "The relationship between Bostons Heartbeat label and Clarence Coxsone Dodd's Studio One label has yielded to American audiences a treasure trove of previously hard-to-find roots reggae. The tradition continues, in a slightly different mode, with this interesting collection of dub versions based on tracks from the Studio One vaults. What makes it interesting is that the dubs themselves are not period pieces -- they are modern realizations by an engineer coyly identified only as the Dub Specialist (whom one is tempted to identify as Heartbeat label head Chris Wilson). Whoever it is, he doesnt have quite the same genius as that which animated the best dub artists of the 1970s; where King Tubby or Augustus Pablo would have made artful use of drop-out, delay, and echoing cross-rhythms, whoever was at the board for these mixes satisfied himself mainly with the random imposition of echo. Its not a bad sound, and heaven knows the rhythms are excellent (and their original versions are helpfully identified in the liner notes). But it doesnt amount to anything like essential dub. (For that, check out the two-disc set Dub Over Dub, also on Heartbeat, and featuring the mixing talents of Errol Brown on singles culled from the vaults of Sonia Pottinger.)",
    youtube: "https://www.youtube.com/embed/TWeIVcv1YOM",
    images:
      {
        full: "images/dub-shots-from-studio-one-full.jpg",
        thumb: "images/dub-shots-from-studio-one-thumb.jpg"
      }

  }
];
