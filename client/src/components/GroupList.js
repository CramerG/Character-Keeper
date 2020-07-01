import React, {useState} from 'react';

const GroupList = (props) => {
    const [groups, setGroups] = useState([]);

    const findGroups = () => {
        
    }

    const showGroups = () => {
        if (groups.length == 0) {
            return(
                <div>You do not belong to any groups</div>
            );
        }
    }

    return(
        <div>
            {showGroups()}
        </div>
    )

}

export default GroupList;