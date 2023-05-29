import React from 'react';

function PageFooter() {
    return (
        <footer className="bg-info p-3">
            <div className={`container`}>
                <p className="float-end"><a href="#">Back to top</a></p>
                <p>&copy; 2023 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </div>

        </footer>
    );
}

export default PageFooter;
