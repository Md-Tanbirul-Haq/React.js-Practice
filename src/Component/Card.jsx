// import {CircleDollar} from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";


import React from 'react';

const TaskCard = ({ Data }) => {
    return (
          <Card variant="default" className="w-[400px] border-2">
                {/* <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
                <Card.Header>
                    <Card.Title>{Data.title}</Card.Title>
                    <Card.Description>
                        {Data.description}
                    </Card.Description>
                </Card.Header>
                <Card.Footer>
                    <Link
                        aria-label="Go to Acme Creator Hub (opens in new tab)"
                        href="/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {Data.title}
                        <Link.Icon aria-hidden="true" />
                    </Link>
                </Card.Footer>
            </Card>
    );
};

export default TaskCard;