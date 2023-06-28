import React from "react";


const img2 = "https://dhavalportfolio.info/index_files/vlb_images1/login_page_5.jpg";
const img1 = "https://dhavalportfolio.info/index_files/vlb_images1/login_page_1.jpg";
const img3 = "https://dhavalportfolio.info/index_files/vlb_images1/login_page_3.jpg";

function Content() {
    return (
        <>
            <div class="card-group mt-5">
                <div class="card">
                    <img src={img1} class="card-img-top" alt="not found"/>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Login Form 1</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button><b className="bi bi-download">Download</b></button>
                        </div>
                </div>
                <div class="card">
                    <img src={img2} class="card-img-top" alt="not found"/>
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Login Form 2</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <button><b className="bi bi-download">Download</b></button>
                        </div>
                </div>
                <div class="card">
                    <img src={img3} class="card-img-top" alt="not found"/>
                        <div class="card-body">
                            <h5 class="card-title  fw-bold">Login Form 3</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <button><b className="bi bi-download">Download</b></button>
                        </div>
                </div>
            </div>
        </>
    );
};

export default Content;