'use client'
import Image from 'next/image';
import NavBar from '@/app/components/NavBar';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import PhotoGrid from '@/app/components/PhotoGrid';

export default async function Page({ params }: any) {
  const [follow, setFollow] = useState(false); // Use state to track the follow state

  const user = await getUser({ params });

  const handleFollow = () => {
    // Toggle the follow state
    setFollow(!follow);
    console.log('Follow state changed');
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="column">
          <div className="photo">
            <Image
              src="/placeholder-img.jpg"
              alt="User Avatar"
              width={100}
              height={100}
              className="avatar"
            />
            <button className="follow-button" onClick={handleFollow}>
              {follow ? 'FOLLOWING' : 'FOLLOW'}
            </button>
          </div>
        </div>
        <div className="column">
          <div className="text">
            <h1 className="name">{user.name}</h1>
            <p className="website">Website: {user.website}</p>
            <div className="bio">
              <p className="username">Username: {user.username}</p>
              <p className="email">Email: {user.email}</p>
              <p className="phone">Phone: {user.phone}</p>
              <p className="street">Street: {user.address.street}</p>
              <p className="suite">Suite: {user.address.suite}</p>
              <p className="city">City: {user.address.city}</p>
              <p className="zipcode">Zip Code: {user.address.zipcode}</p>
              <p className="company">Company: {user.company.name}</p>
            </div>
          </div>
        </div>
      </div>

      <PhotoGrid />
    </div>
  );
};


export async function generateStaticParams() {    // Define the paths to pre-render based on the user IDs
  return [{ userid: '1' },
  { userid: '2' },
  { userid: '3' },
  { userid: '4' },
  { userid: '5' },
  { userid: '6' },
  { userid: '7' },
  { userid: '8' },
  { userid: '9' },
  { userid: '10' }
  ];

};

async function getUser({ params }: any) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params?.userid}`
  );
  const user = await response.json();

  // console.log(user);

  return user;
};