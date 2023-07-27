function Features() {
    return (
        <div className="container px-4 py-5" id="featured-3">
            <h2 className="pb-2 border-bottom text-center">Our Features</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
                        <span className="pi pi-search" style={{ fontSize: '2.5rem', color:'#00ABB3'}}></span>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Book Search</h3>
                    <p>Discover a world of literary treasures with our book search feature! Easily explore a wide range of books by title, author, or keywords. Whether you're a mystery lover, history buff, or seeking self-improvement, our search tool will guide you to the perfect read. Start your book adventure today and unlock the magic of storytelling!"</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                        <span className="pi pi-sitemap" style={{ fontSize: '2.5rem', color: '#00ABB3' }}></span>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Book Realtion</h3>
                    <p>Enhance your reading journey with our 'Book Relations' feature! Delve into a curated selection of related books based on authors, genres, and themes. Uncover hidden gems and literary companions that complement your favorite reads. Expand your literary horizons and embark on new adventures with our handpicked book recommendations. Dive into the fascinating world of book relations and let the pages come alive with captivating narratives and thought-provoking tales!"</p>
                </div>
                <div className="feature col">
                    <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                        <span className="pi pi-book" style={{ fontSize: '2.5rem', color:'#00ABB3'}}></span>
                    </div>
                    <h3 className="fs-2 text-body-emphasis">Reading Profile</h3>
                    <p>Unlock the secrets of your reading habits with our 'Reading Profile' feature! Gain insights into your favorite genres, authors, and reading patterns. Track your reading progress, set reading goals, and receive personalized book recommendations based on your unique preferences. Our 'Reading Profile' empowers you to explore new genres and authors while keeping track of your literary achievements. Uncover the depths of your reading journey and embark on a personalized adventure through the vast world of books!"</p>
                </div>
            </div>
        </div>
    )
}
export default Features