import React from 'react'
import { LaunchListQuery, useLaunchListQuery } from '../../generated/graphql';

interface AppProps {
     onChangeHandler: (id: number) => void
}
const LaunchList: React.FC<AppProps> = ({ onChangeHandler }) => {
     const { data, error, loading } = useLaunchListQuery();

     if (loading) {
          return <div>Loading...</div>;
     }

     if (error || !data) {
          return <div>ERROR</div>;
     }
     console.log(data)
     return (<>
          <div>
               {data.launches?.map((item) => {
                    return <div onClick={() => { item.flight_number && onChangeHandler(item.flight_number) }} key={item?.flight_number}>{item?.mission_name}</div>
               })}
          </div>
     </>
     )
}

export default LaunchList
