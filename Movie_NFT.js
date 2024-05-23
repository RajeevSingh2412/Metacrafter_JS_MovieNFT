
//Welcome message
console.log("\n------- WELCOME TO MY NFT collection for movies -------\n\n");

//creating array for collection of movies
const NFT_list=[];

//minting the movies
function mintNFT(movie_name,movie_genre,movie_origin,movie_actor,movie_imdbrating,movie_releasedate) { 
    const nft_obj={
        "name":movie_name,
        "genre":movie_genre,
        "origin":movie_origin,
        "actor":movie_actor,
        "imdbrating":movie_imdbrating,
        "releasedate":movie_releasedate
    };
    NFT_list.push(nft_obj);
}

//listing all the movies in nft_list array
function listNFTs(){
    console.log("\nCollection of Movies : \n");
    let i;
    for(i=0;i<NFT_list.length;i++){
        console.log("Movie Number : \t\t"+(i+1));
        console.log("Movie : \t\t"+NFT_list[i].name);
        console.log("Genre : \t\t"+NFT_list[i].genre);
        console.log("Origin : \t\t"+NFT_list[i].origin);
        console.log("Actors : \t\t"+NFT_list[i].actor[0]+" and "+NFT_list[i].actor[1]);
        console.log("IMDB Rating : \t\t"+NFT_list[i].imdbrating);
        console.log("Release Date : \t\t"+NFT_list[i].releasedate);
        console.log();
    }
}

//returning the size of nft_list
function getTotalSupply(){
    return NFT_list.length;
}

//calling mintNFT for 5 various movies
mintNFT("Oblivion","Sci-Fi","USA",["Tom Cruse","Olga Kurylenko"],6.9,"19-05-2019");
mintNFT("The Matrix","Sci-Fi","USA",["Keanu Reeves", "Laurence Fishburne","Carrie-Anne Moss"],8.7,"1999-03-31");
mintNFT("Pathaan","Action","India",["Shah Rukh Khan","Deepika Padukone"],5.8,"25-01-2023");
mintNFT("Manikarnika","Biography","India",["Kangana Ranaut","Suresh Oberoi"],6.4,"25-01-2019");
mintNFT("Train to Busan","Horror","South Korea",["Gong Yoo","Jung Yu-mi"],7.6,"17-07-2016");

//printing total number of NFTs in the array
console.log("Total collection of movies that we have = "+getTotalSupply());

//calling listNFTs to print all the details of movies in our nft_list
listNFTs();
