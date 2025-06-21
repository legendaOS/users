export default function cardTemplate(data) {

    return `
    <div class="card">

        <div class="card__header">

            <div class="card__header_info">

                <img class="card__header_image" src="${data?.avatar}">

                </img>

                <div class="card__header_title">

                    <span class="medium">${data?.first_name}</span>

                    <span class="regular">${data?.last_name}</span>

                </div>

            </div>

            <img class="card__header_tumbnail" src="${data?.tumbnail}">

            </img>

        </div>

        <img class="card__image" src="${data?.image}">

        </img>

        <div class="card__content">

            <div class="card__content_title">

                <span class="medium">${data?.title}</span>

                <span class="regular">${data?.description}</span>

            </div>

            <div class="card__content_description">

                <span class="regular">
                    ${data?.content}
                </span>

            </div>

        </div>

    </div>
    `

}