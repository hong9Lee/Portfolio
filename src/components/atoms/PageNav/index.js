import React from "react";

const PageNav = (prop) => {
    const data = prop;

    return (<>
        <section>
            <div className="pmNav">
                <a href='/' className="homeHref">
                    {`
                            Portfolio Main
                        `}
                </a>

                <span className="arr"/>

                <a href={data.href} className={(data.detail ? "" : "bd ") + "projectHref"}>
                    {data.text}
                </a>

                {data.detail ?
                <>
                    <span className="arr"/>
                    <a href={data.d_href} className="bd projectHref">
                        {data.detail}
                    </a>
                </> : ""}

            </div>
        </section>
    </>);
};

PageNav.propTypes = {};

PageNav.defaultProps = {};
export default PageNav;
