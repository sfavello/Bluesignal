
export const categories = [
    {
    name: 'Entertainment',
    image: 'https://source.unsplash.com/1600x900/?entertainment',
},
    {
    name: 'Animals',
    image: 'https://source.unsplash.com/1600x900/?animals',
},
    {
        name: 'Decor',
        image: 'https://source.unsplash.com/1600x900/?decor',
},
    {
        name: 'Car',
        image: 'https://source.unsplash.com/1600x900/?car',
},
    {
        name: 'Food',
        image: 'https://source.unsplash.com/1600x900/?food,sweets,vegetables,fruit',
},
    {
        name: 'Books',
        image: 'https://source.unsplash.com/1600x900/?book',
},
    {
        name: 'Wellness',
        image: 'https://source.unsplash.com/1600x900/?wellness,yoga',
},
    {
        name: 'Quotes',
        image: 'https://source.unsplash.com/1600x900/?quotes,uplighting'
},
    {
        name: 'Travel',
        image: 'https://source.unsplash.com/1600x900/?travel',
},
    {
      name: 'Flowers',
      image: 'https://source.unsplash.com/1600x900/?flowers'
},
  {
    name: 'Nature',
    image: 'https://source.unsplash.com/1600x900/?nature'
  },

  {
    name: 'Other',
    image: 'https://source.unsplash.com/1600x900/?space'
}

];



export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  
    return query;
};