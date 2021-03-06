(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }})("carte",
{ "height":30,
 "layers":[
        {
         "compression":"zlib",
         "data":"eJzt0ksKACAIBFDr\/oduL41pH4UYwU1ST6smIq0os4MuXbp06dKlmxv9E7cHcuWifajm7c\/jojVd87piuPpsPWeWi3q55a7e8KU7C2vumy6aG7nRPx25Z8s4dXdj163IATNbARs=",
         "encoding":"base64",
         "height":30,
         "name":"Calque de Tile 1",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":30,
         "x":0,
         "y":0
        }],
 "nextobjectid":1,
 "orientation":"orthogonal",
 "properties":
    {

    },
 "renderorder":"right-down",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "margin":0,
         "name":"collection",
         "properties":
            {

            },
         "spacing":0,
         "tilecount":2,
         "tileheight":32,
         "tileproperties":
            {
             "1":
                {
                 "chemin":"1"
                }
            },
         "tiles":
            {
             "0":
                {
                 "image":"assets\/tuile-bleue.png"
                },
             "1":
                {
                 "image":"assets\/tuile-rouge.png"
                }
            },
         "tilewidth":32
        }],
 "tilewidth":32,
 "version":1,
 "width":30
});