export default {
    footer: null,
    head: ({ title, meta }) => (
        <>
            <script
                defer
                data-domain='danielwei.me'
                src='https://wednesdays.ddns.net/js/script.js'
            ></script>
            {meta.description && (
                <meta name='description' content={meta.description} />
            )}
            {meta.tag && <meta name='keywords' content={meta.tag} />}
            {meta.author && <meta name='author' content={meta.author} />}
        </>
    ),
    readMore: "Read More →",
    postFooter: null,
    darkMode: false,
    navs: [
        {
            url: "https://github.com/shuding/nextra",
            name: "Nextra",
        },
    ],
};
