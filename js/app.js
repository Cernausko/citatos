
    fetch('https://strangerthings-quotes.vercel.app/api/quotes/50')
        .then(response => response.json())
        .then(quotes => {
            const carouselInner = document.querySelector('.carousel-inner');
            const carouselIndicators = document.querySelector('.carousel-indicators');

            quotes.forEach((quote, index) => {
                const carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (index === 0) {
                    carouselItem.classList.add('active');
                }

                carouselItem.innerHTML = `
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8 col-lg-9 col-xl-8">
                            <div class="d-flex">
                                <div class="flex-shrink-0"></div>
                                <div class="flex-grow-1 ms-4 ps-3">
                                        <div class="quote mb-4">
                                            <p>
                                                <span class="text" id="quote${index}">${quote.quote}</span>
                                            </p>
                                        </div>
                                        <div class="quotef">
                                           ${quote.author}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                carouselInner.appendChild(carouselItem);

                const indicatorButton = document.createElement('button');
                indicatorButton.setAttribute('data-bs-target', '#carouselDarkVariant');
                indicatorButton.setAttribute('data-bs-slide-to', index.toString());
                if (index === 0) {
                    indicatorButton.classList.add('active');
                }

                carouselIndicators.appendChild(indicatorButton);
            });
        })

