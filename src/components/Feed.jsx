import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import {client} from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Rings from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    if(categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);

      client.fetch(query).then((data) => {
          setPins(data);
          setLoading(false);
        });
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((data) =>
      {
        setPins(data);
        setLoading(false);
      });

    }
  }, [categoryId]);
  
  const ideaName = categoryId || 'new';
  if (loading) {
    return (
      <Rings message={`We are adding ${ideaName} ideas to your path.`} />
    );
  }
  return (
    <div>
      {pins && (
        <MasonryLayout pins={pins} />
      )}
    </div>
  );
};

export default Feed