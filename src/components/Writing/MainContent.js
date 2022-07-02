import React from 'react'
import CustomEditor from 'components/common/CustomEditor';

export default function MainContent({ activeBook, activeChapter }) {
    return (
        <div className="width820">
            <div className="card pb--50">
                <div className="card-header">
                    <a href="/" className="printBook text-white hideOnSmallView">
                        <img alt="alt" src="img/print_icon.png" />
                        &nbsp;&nbsp; Print Book
                    </a>
                    <a href="/" className="dlPDF text-white ml--30 hideOnSmallView">
                        <img alt="alt" src="img/download_pdf.png" />
                        &nbsp;&nbsp; Download Book as PDF
                    </a>
                    <div className="text-right showOnSmallView">
                        <a
                            href="/"
                            className="dlPDF text-white ml--30 showOnSmallView"
                            title="Download Book as PDF"
                        >
                            <img alt="alt" src="img/download_pdf.png" />
                        </a>
                        <a
                            href="/"
                            className="printBook text-white showOnSmallView"
                            title="Print Book"
                        >
                            <img alt="alt" src="img/print_icon.png" />
                        </a>
                    </div>
                    <div className="clearfix" />
                </div>
                <div className="card-body">
                    <div className="cardContent">
                        <div className="headerHolder float-left">
                            <h2>{activeBook?.name}</h2>
                            <p className="author">
                                (by{" "}
                                <a href="/" className="colorLightBlue">
                                    {activeBook?.author})
                                </a>
                            </p>
                        </div>
                        <button className="btn btn-round bg--defaultBlue text-white float-right editBookBtn">
                            <img alt="alt" src="img/edit_book_pencil.png" /> Edit this book
                        </button>
                        <div className="clearfix" />
                    </div>
                    {
                        activeChapter && (
                            <>
                                <div className="innerCardWrapper">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="container no-padding-lr">
                                                <div className="row">
                                                    <div className="col-lg-8 col-md-8">
                                                        <h2>{activeChapter?.name}: {activeChapter?.title}</h2>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className="btnHollder float-right">
                                                            <a href="/" className="btn btn-round-transparent">
                                                                <img alt="alt" src="img/print_dark_icon.png" />
                                                            </a>
                                                            <a href="/" className="btn btn-round-transparent">
                                                                <img alt="alt" src="img/download_dark_icon.png" />
                                                            </a>
                                                            <a
                                                                href="/"
                                                                className="btn btn-delete btn-round-transparent"
                                                                data-toggle="modal"
                                                                data-target="#deletePopUp"
                                                            >
                                                                <img alt="alt" src="img/delete_red_icon.png" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-block lightGrayBg">
                                            <a href="/" className="colorLightBlue d-block text-center">
                                                + Add Profile Links
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {
                                    activeChapter?.topics?.map((topic, index) => {
                                        return (
                                            <div className="innerCardWrapper mt--10" key={index}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="container no-padding-lr">
                                                            <div className="row">
                                                                <div className="col-lg-8 col-md-8">
                                                                    <h2 className="colorGray opacity--50 font-italic fs--20 lh--normal">
                                                                        {topic?.name} {topic?.title}
                                                                    </h2>
                                                                </div>
                                                                <div className="col-lg-4 col-md-4">
                                                                    <div className="btnHollder float-right">
                                                                        <a href="/" className="btn btn-round-transparent">
                                                                            <img alt="alt" src="img/print_dark_icon.png" />
                                                                        </a>
                                                                        <a href="/" className="btn btn-round-transparent">
                                                                            <img alt="alt" src="img/download_dark_icon.png" />
                                                                        </a>
                                                                        <a
                                                                            href="/"
                                                                            className="btn btn-delete btn-round-transparent"
                                                                            data-toggle="modal"
                                                                            data-target="#deletePopUp"
                                                                        >
                                                                            <img alt="alt" src="img/delete_red_icon.png" />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="toolbarsWrapper d-block">
                                                        <a href="/" className="colorLightBlue d-block text-center">
                                                            + Add Profile Links
                                                        </a>
                                                    </div>
                                                    <div className="editContentWrapper card-body active">
                                                        <CustomEditor initialValue="Mi proin sed libero enim sed faucibus turpis in eu. Sit amet commodo nulla facilisi nullam. Tincidunt praesent semper feugiat nibh sed. Dignissim diam quis enim lobortis scelerisque fermentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Feugiat nibh sed pulvinar proin gravida hendrerit. Metus dictum at tempor commodo ullamcorper a lacus. Mi proin sed libero enim sed faucibus turpis. Tempus urna et pharetra pharetra massa massa ultricies mi quis." />
                                                    </div>
                                                    {
                                                        topic?.comment && (
                                                            <div className="topic-comments">
                                                                <p className="fs--12">Comments ({topic?.comment?.count})</p>
                                                                {
                                                                    topic?.comment?.data?.map(() => {
                                                                        return (
                                                                            <div className="author">
                                                                                <img alt="alt"
                                                                                    className="avatarIcon"
                                                                                    src="img/avatar/sophists.png"
                                                                                />
                                                                                <p className="fs--12">
                                                                                    <a href="/">Jenna Smith </a>
                                                                                    <br />
                                                                                    <small className="fs--11">
                                                                                        "Hi. I'm looking forward to connecting with some of
                                                                                        you."
                                                                                    </small>
                                                                                </p>
                                                                                <div className="clearfix" />
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        )
                                                    }

                                                    <div className="d-block text-center">
                                                        <a href="/" className="colorLightBlue d-block">
                                                            + Add Topic
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </>
                        )
                    }
                </div>
                <div className="text-center">
                    <button className="btn btn-round bg--defaultBlue text-white">
                        + Add Chapter
                    </button>
                </div>
            </div>
        </div>
    )
}
