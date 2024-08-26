import React from 'react';

export default function ClassNavBar(props) {

    return (
        <div>
            <nav>

                NavBar :
                <span> {props.totalCounters}</span>

            </nav>
        </div>
    )
}
