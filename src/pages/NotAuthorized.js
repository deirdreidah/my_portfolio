import React from 'react';

export default function NotAuthorized() {
    return (
        <div className="text-red-600">
            <h1 className="text_2x1 font_bold">Not Authorized</h1>
            <p>You do not have access to view this page.</p>
        </div>
    );
}