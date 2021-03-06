import React from 'react'
import { useLaunchProfileQuery } from '../../generated/graphql';
import './style.css';

function LaunchProfile() {
     const className = 'LaunchProfile';

     const { data, error, loading } = useLaunchProfileQuery({ variables: { id: '42' } });

     if (loading) {
          return <div>Loading...</div>;
     }

     if (error) {
          return <div>ERROR</div>;
     }
     console.log(data)
     return <h1>execute</h1>

     // if (!data.launch) {
     //      return <div>No launch available</div>;
     // }
     // return (
     //      <div className={className}>
     //           <div className={`${className}__status`}>
     //                <span>Flight {data.launch.flight_number}: </span>
     //                {data.launch.launch_success ? (
     //                     <span className={`${className}__success`}>Success</span>
     //                ) : (
     //                     <span className={`${className}__failed`}>Failed</span>
     //                )}
     //           </div>
     //           <h1 className={`${className}__title`}>
     //                {data.launch.mission_name}
     //                {data.launch.rocket &&
     //                     ` (${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
     //           </h1>
     //           <p className={`${className}__description`}>{data.launch.details}</p>
     //           {!!data.launch.links && !!data.launch.links.flickr_images && (
     //                <div className={`${className}__image-list`}>
     //                     {data.launch.links.flickr_images.map(image =>
     //                          image ? <img src={image} className={`${className}__image`} key={image} /> : null,
     //                     )}
     //                </div>
     //           )}
     //      </div>
     // )
}

export default LaunchProfile
