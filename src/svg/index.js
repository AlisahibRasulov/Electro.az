export const Crown = ({...props}) => (
    <svg
        width={16}
        height={12}
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M14.477 1.507a1.473 1.473 0 00-.98 2.57l-1.962 1.315-2.71-2.72A1.474 1.474 0 007.974 0a1.472 1.472 0 00-.854 2.672L4.41 5.392 2.447 4.078a1.473 1.473 0 00-.98-2.57C.659 1.507 0 2.167 0 2.98c0 .667.444 1.232 1.05 1.413l.885 6.658H14.01l.884-6.658a1.475 1.475 0 00-.417-2.887zm-5.38 7.54l-.794.797a.466.466 0 01-.66 0l-.794-.797a1.48 1.48 0 010-2.085l.793-.796a.466.466 0 01.66 0l.794.796a1.477 1.477 0 010 2.085z"
            fill="#fff"
        />
    </svg>
)

export const SearchIcon = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
    // stroke="#fff"
      fill="#aaa"
      d="M20.293 21.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM16.47 9.235a7.235 7.235 0 0 1-7.236 7.236v2c5.1 0 9.236-4.135 9.236-9.236h-2Zm-7.236 7.236A7.235 7.235 0 0 1 2 9.235H0c0 5.1 4.135 9.236 9.235 9.236v-2ZM2 9.235A7.235 7.235 0 0 1 9.235 2V0A9.235 9.235 0 0 0 0 9.235h2ZM9.235 2a7.235 7.235 0 0 1 7.236 7.235h2C18.47 4.135 14.336 0 9.235 0v2Zm5.176 13.825 5.882 5.882 1.414-1.414-5.882-5.882-1.414 1.414Z"
    />
  </svg>
)


export const Spin = ({fill, ...props}) => (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" data-loading-icon role="img"
         aria-label="Spin Icon" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5 2.344a1 1 0 10-2 0v3.062a1 1 0 102 0V2.344zm0 12.25a1 1 0 10-2 0v3.062a1 1 0 102 0v-3.062zM4.38 3.88a1 1 0 011.414 0L7.96 6.046A1 1 0 016.546 7.46L4.38 5.294a1 1 0 010-1.414zm10.073 8.659a1 1 0 00-1.414 1.414l2.166 2.166a1 1 0 001.414-1.414l-2.166-2.166zm-12.61-2.54a1 1 0 011-1h3.063a1 1 0 010 2H2.844a1 1 0 01-1-1zm13.25-1a1 1 0 100 2h3.063a1 1 0 100-2h-3.062zM7.96 12.54a1 1 0 010 1.414L5.794 16.12a1 1 0 01-1.414-1.414l2.166-2.166a1 1 0 011.414 0zm8.66-7.245a1 1 0 00-1.415-1.414L13.04 6.046a1 1 0 001.414 1.414l2.166-2.166z"
        />
    </svg>
);

export const SpinSmall = ({fill, ...props}) => (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" data-loading-icon role="img"
         aria-label="Spin Icon Small" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 1.875a1 1 0 10-2 0v2.45a1 1 0 002 0v-2.45zm0 9.8a1 1 0 10-2 0v2.45a1 1 0 102 0v-2.45zM2.963 2.962a1 1 0 011.414 0L6.11 4.695A1 1 0 014.695 6.11L2.963 4.377a1 1 0 010-1.415zm8.341 6.928a1 1 0 10-1.414 1.414l1.733 1.733a1 1 0 001.414-1.414L11.304 9.89zM.875 8a1 1 0 011-1h2.45a1 1 0 010 2h-2.45a1 1 0 01-1-1zm10.8-1a1 1 0 100 2h2.45a1 1 0 100-2h-2.45zM6.11 9.89a1 1 0 010 1.414l-1.733 1.733a1 1 0 01-1.414-1.414L4.695 9.89a1 1 0 011.415 0zm6.927-5.513a1 1 0 00-1.414-1.415L9.89 4.695a1 1 0 101.414 1.415l1.733-1.733z"
        />
    </svg>
);

export const Plus = ({...props}) => (
    <svg width={14} height={14} viewBox="0 0 16 16" fill="none" {...props}>
        <path d="M2.5 8h11M8 2.5v11" stroke="#F4F4F4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


export const EmptyHeart = (props) => {
    return (
        <svg
            width={24}
            height={20}
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M12.827 2.325h0l-.891.906-.357.363-.356-.363-.891-.906h0C8.221.173 4.826-.148 2.57 1.75l10.256.575zm0 0c2.114-2.152 5.505-2.472 7.761-.575 2.615 2.203 2.753 6.16.409 8.548h0m-8.17-7.973l8.17 7.973m0 0l-8.752 8.92s0 0 0 0a.93.93 0 01-1.335 0s0 0 0 0l-8.752-8.92m18.838 0H2.158m0 0C-.183 7.91-.044 3.954 2.57 1.75l-.413 8.549z"
                fill="#000"
                fillOpacity={0.25}
                stroke="#fff"
            />
        </svg>
    )
}


export const FullHeart = (props) => {
    return (
        <svg
            width={24}
            height={20}
            viewBox="0 0 24 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M20.91 1.368c-2.479-2.085-6.165-1.71-8.44.607l-.89.906-.892-.906c-2.27-2.317-5.961-2.692-8.44-.607-2.84 2.392-2.99 6.687-.447 9.28l8.752 8.92a1.43 1.43 0 002.048 0l8.752-8.92c2.547-2.593 2.397-6.888-.443-9.28z"
                fill="#B90D5D"
            />
        </svg>
    )
}


export const Credit = (props) => {
    return (
        <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M19.12 22.77l.185-1.401.803.106c.236-.14.39-.438.352-.768l-.162-1.402 1.232-.184c.433-.065.694-.579.527-1.037l-.476-1.306 1.148-.54c.403-.19.538-.764.273-1.158l-.757-1.12.986-.861c.346-.302.346-.896 0-1.198l-.986-.86.757-1.121c.265-.394.13-.967-.273-1.157l-1.148-.541.476-1.306c.167-.458-.094-.972-.527-1.037l-1.232-.184.162-1.402c.039-.33-.116-.627-.352-.768l-.803.106-.016-.12-.168-1.281a.755.755 0 00-1.037-.599l-1.306.54-.54-1.305a.755.755 0 00-1.158-.31l-1.12.86-.861-1.12a.755.755 0 00-1.198 0l-.86 1.12L9.92.557a.755.755 0 00-1.157.31l-.541 1.306-1.306-.541a.755.755 0 00-1.037.599L5.695 3.63l-1.402-.184a.755.755 0 00-.846.846l.184 1.402-1.401.184a.755.755 0 00-.599 1.037l.54 1.306-1.305.54a.755.755 0 00-.31 1.158l.86 1.12-1.12.861a.755.755 0 000 1.198l1.12.86-.86 1.121a.755.755 0 00.31 1.157l1.306.541-.541 1.306a.755.755 0 00.599 1.037l1.401.184-.184 1.402a.755.755 0 00.846.846l1.402-.184.184 1.401a.755.755 0 001.037.599l1.306-.54.54 1.305a.755.755 0 001.158.31l1.12-.86.861 1.12a.755.755 0 001.198 0l.86-1.12 1.121.86a.755.755 0 001.157-.31l.541-1.306 1.306.541a.755.755 0 001.037-.599z"
                fill="#B90D5D"
            />
            <path
                d="M16.235 13.217a3.018 3.018 0 100 6.036 3.018 3.018 0 000-6.036zm0 4.527a1.509 1.509 0 110-3.018 1.509 1.509 0 010 3.018zM8.765 5.747a3.018 3.018 0 100 6.036 3.018 3.018 0 000-6.036zm0 4.527a1.509 1.509 0 110-3.018 1.509 1.509 0 010 3.018zM7.005 17.995a.754.754 0 010-1.067l9.923-9.923a.755.755 0 011.067 1.067l-9.923 9.923a.754.754 0 01-1.067 0z"
                fill="#fff"
            />
        </svg>
    )
}

export const FooterLogo = (props) => (
    <svg
        width={138}
        height={64}
        viewBox="0 0 138 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M93.4 3.109c-.203-.224-.578-.274-5.16-.669-4.582-.394-13.37-1.133-17.832-1.495C65.946.583 65.811.598 65.7.731c-.112.133-.203.384-.434 2.183a217.433 217.433 0 00-.753 6.861c-.149 1.717-.074 1.806.936 1.888 1.01.081 2.954.156 4.12.209 1.168.053 1.557.084 1.74.188.183.103.159.279.127.495-.032.216-.071.472-.203 1.469-.132.996-.358 2.732-.538 6.69-.27 6.185-.143 12.105.467 18.269.038.386.028 1.078.551 1.02.48-.053 2.255-.835 2.865-1.07 2.31-.872 4.706-1.79 7.055-2.545.426-.138 1.54-.367 1.768-.698.22-.321-.01-1.294-.054-1.709-.058-.538-.102-1.087-.144-1.627-.344-4.402-.486-10.262-.467-13.753.02-3.492.2-4.615.365-5.191.165-.576.315-.606 1.396-.597 1.082.008 3.095.055 4.278.13 1.183.076 1.535.18 1.804.039.268-.14.452-.525.952-2.04.5-1.516 1.316-4.163 1.709-5.687.393-1.523.363-1.922.16-2.146zM75.568 59.94c.346.712.638.842 3.083.785 2.445-.058 7.043-.301 9.442-.658 2.4-.356 2.6-.826 2.46-1.503-.14-.678-.62-1.565-1.662-4.253-.862-2.228-1.69-4.475-2.395-6.756-.306-.987-.477-.978-1.4-.584-1.601.683-3.47 1.27-5.136 1.81a143.459 143.459 0 01-5.833 1.774c-.993.276-.91.52-.686 1.47.53 2.245 1.035 4.674 1.717 6.84.117.367.243.727.41 1.075zM.146 3.258c.202-.224.577-.274 5.159-.668 4.582-.395 13.37-1.133 17.832-1.495 4.462-.362 4.597-.347 4.71-.214.112.132.202.384.433 2.182.231 1.799.604 5.144.753 6.862.149 1.717.074 1.805-.936 1.887-1.01.082-2.954.156-4.12.21-1.168.052-1.557.084-1.74.187-.183.104-.159.28-.127.495.032.216.071.473.203 1.47.133.996.358 2.732.538 6.69.033.729.057 1.427.113 2.157.163 2.117-.738 1.568-2.303 1.307-2.436-.406-4.903-.778-7.345-1.165-.48-.075-.917-.13-1.396-.193-1.346-.175-1.176-.898-1.124-2.02.031-.68.018-1.425.014-2.11v-.09c-.02-3.492-.2-4.614-.365-5.19-.165-.577-.315-.606-1.396-.598-1.082.009-3.095.056-4.278.131-1.183.075-1.535.178-1.804.038-.268-.14-.452-.524-.952-2.04C1.515 9.575.699 6.928.306 5.405c-.393-1.523-.363-1.922-.16-2.147zm22.39 34.098c-.629 6.358-2.022 12.894-2.919 16.81-.896 3.916-1.295 5.212-1.64 5.924-.347.713-.64.842-3.084.785-2.445-.057-7.043-.301-9.442-.657-2.4-.357-2.6-.826-2.46-1.504.14-.678.62-1.564 1.662-4.252 1.042-2.688 2.647-7.178 3.723-10.895.834-2.89 1.441-5.662 1.719-8.66.035-.378.025-1.048.495-1.11.279-.036 1.32.095 1.69.113 2.685.132 5.522.165 8.21.11.505-.01 1.686-.183 2.056.108.426.335.17 1.465.113 1.952-.048.423-.08.852-.122 1.276zM34.262.522C36.175.4 39.805.154 41.792.054c1.988-.1 2.333-.056 2.498.092.165.147.15.398.27 4.853.153 5.663.304 11.317.4 16.982.016.98.3 1.682-.911 1.95-.822.18-1.103-.148-1.084-.981l.004-.16c.03-.62.22-1.544.203-2.372-.015-.828-.236-1.56-.527-2.072-.292-.512-.655-.804-.902-.44-.248.366-.38 1.388-.673 2.347-.293.958-.747 1.853-1.021 2.573-.275.72-.369 1.266-.633 1.731-.264.465-.698.85-1.332 1.141-1.257.566-3.147.373-4.5.325-1.5-.053-1.254-.645-1.217-1.877.064-2.141.064-4.348.075-6.494.004-.78.006-1.56.005-2.34a223.202 223.202 0 00-.262-10.995c-.105-2.153-.165-2.913-.098-3.293.068-.38.263-.38 2.175-.502zm9.25 44.792c.18.596.13.928-.038 1.124-.169.196-.456.256-1.942.116s-4.17-.48-5.701-.576c-1.533-.096-1.914.05-2.105.295-.19.246-.191.59-.172.859.018.27.056.465 1.223.68 1.167.215 3.463.45 4.766.627s1.614.297 1.756.473c.143.176.116.408.084.666-.031.259-.069.545-1.457.7-1.389.157-4.129.184-5.566.334-1.437.15-1.572.424-1.652.762-.08.338-.104.74.846.882.95.142 2.873.022 4.342.01 1.468-.011 2.48.085 3.022.36.542.275.613.73-.12 1.056-.733.327-2.27.527-3.636.678-1.365.151-2.558.254-3.158.466-.6.212-.608.533-.494.82.114.286.35.537 1.703.523 1.352-.015 3.82-.295 5.208-.431 1.388-.137 1.695-.13 1.922.002.227.13.373.386-.3.912-.673.527-2.165 1.325-3.106 1.856-.94.532-1.328.798-1.44 1.125-.113.328.05.716.769.628.718-.088 1.992-.653 3.474-1.388a75.56 75.56 0 004.391-2.362c1.22-.72 1.968-1.25 2.402-1.719.433-.468.55-.874 1.79-1.074 1.24-.2 3.6-.192 6.263-.298 1.477-.06 2.913-.133 4.383-.292 1.016-.11 1.079.17.83 1.108-.909 3.44-3.05 6.039-6.198 7.755a14.616 14.616 0 01-4.801 1.614c-2.187.33-5.636.33-7.823 0-4.713-.71-9.135-3.782-10.687-8.34-.39-1.146-.585-2.387-.645-3.997-.06-1.61.015-3.59.127-6.413.042-1.04.297-11.107.457-11.377.223-.38 1.14-.365 1.563-.419 1.488-.19 3.09-.584 4.582-.66 1.252-.056 1.464.318 1.997.689.949.642 2.39 1.09 3.487 1.408 1.297.378 1.148.992 1.089 2.164-.089 1.836-.03 3.688-.054 5.524-.008.645-.106.385-.33-.057-.203-.4-.775-1.778-1.19-1.896-.572-.164-.744 1.305-.751 1.667-.025 1.357.51 2.196.89 3.416zm5.255-12.228c-.015-.658.152-.58.812-.542 1.21.07 2.555.102 3.763.024 1.257-.094 1.426-.388 1.468-.691.042-.304-.042-.617-.815-.792-1.574-.31-3.127-.183-4.64-.431-.684-.112-.637-.373-.63-.982.01-.873.117-.98.945-1.138 1.296-.243 2.76-.458 4.02-.778.215-.055.415-.113.624-.188.889-.331.768-.72.61-1.035-.16-.315-.356-.555-1.789-.41-1.336.143-2.617.406-3.936.618-.566.09-.471-.077-.468-.648.002-.34-.071-1.237.203-1.465.246-.204.922-.375 1.25-.48a31.817 31.817 0 001.872-.683c1.082-.447 1.072-.647 1.026-.915-.047-.267-.13-.604-.375-.805-.616-.47-2.473.263-3.185.48-.814.247-.744-.261-.711-.923.077-1.58.075-3.227.11-4.816.085-3.83.193-7.658.296-11.487.12-4.455.105-4.706.27-4.853.165-.148.51-.192 2.498-.092 1.987.1 5.617.346 7.53.468 1.912.123 2.107.123 2.175.502.068.38.007 1.14-.098 3.293a223.068 223.068 0 00-.262 10.995c-.008 5.297.127 12.345.27 17.701.087 3.276.16 6.612.358 9.88.093 1.536-7.18 3.28-8.994 3.777-.993.267-2.853.745-3.845.519-.418-.096-.297-.54-.282-.902.185-4.267.028-8.941-.07-13.2zM96.379 36.286c2.61 0 4.725-2.084 4.725-4.654s-2.116-4.654-4.725-4.654c-2.61 0-4.725 2.083-4.725 4.654 0 2.57 2.115 4.654 4.725 4.654z"
            fill="#383838"
        />
        <path
            d="M109.039 25.59a2.137 2.137 0 01-2.89-.785 2.071 2.071 0 01.797-2.847c1.452-.809 3.125-1.187 4.736-1.187 1.38 0 2.75.278 3.928.8 1.295.573 2.374 1.453 3.037 2.606.444.773.693 1.637.693 2.58v11.029c0 1.156-.952 2.094-2.126 2.094-1.12 0-2.037-.853-2.12-1.935-.748 1.187-2.131 1.935-4.614 1.935-4.608 0-6.239-2.575-6.239-5.751s2.07-5.751 6.239-5.751c2.386 0 3.818.843 4.608 2.16v-3.78c0-.203-.046-.376-.129-.52-.195-.34-.587-.631-1.093-.856-.624-.276-1.386-.423-2.184-.423-.934 0-1.871.201-2.643.631zm6.049 8.461v-.905c-.299-.995-1.563-1.742-3.077-1.742-1.737 0-3.145.983-3.145 2.195 0 1.211 1.408 2.194 3.145 2.194 1.514 0 2.778-.747 3.077-1.742zM124.549 25.282c-1.178 0-2.133-.99-2.133-2.212 0-1.221.955-2.212 2.133-2.212h11.318c1.178 0 2.133.99 2.133 2.212 0 .606-.235 1.155-.616 1.555l-8.907 10.794h7.007c1.178 0 2.134.99 2.134 2.212 0 1.222-.956 2.212-2.134 2.212h-11.632v-.006c-.49 0-.983-.174-1.384-.53-.893-.792-.997-2.184-.233-3.11l9.006-10.915h-6.692z"
            fill="#383838"
        />
    </svg>
);

export const FooterMobLogo = (props) => (
    <svg
        width={63}
        height={29}
        viewBox="0 0 63 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.42 1.412c-.093-.102-.263-.125-2.344-.304C37.996.93 34.004.594 31.977.43 29.951.265 29.89.272 29.84.332c-.051.06-.092.175-.197.991A98.526 98.526 0 0029.3 4.44c-.068.78-.034.82.425.857.458.037 1.341.07 1.871.095.53.024.707.038.79.085.083.047.072.127.058.225-.015.098-.032.215-.092.667-.06.453-.163 1.241-.244 3.039a57.526 57.526 0 00.211 8.297c.018.175.013.49.25.463.219-.024 1.025-.379 1.302-.485 1.05-.397 2.137-.813 3.204-1.157.194-.062.7-.166.803-.317.1-.145-.004-.587-.025-.776a26.043 26.043 0 01-.065-.739c-.156-1.999-.22-4.66-.212-6.246.009-1.586.09-2.096.166-2.358.075-.261.143-.275.634-.27.491.003 1.406.024 1.943.059.537.034.697.08.819.017.122-.064.206-.238.433-.927.227-.688.597-1.89.776-2.582.178-.692.164-.873.072-.975zM34.32 27.224c.157.323.29.382 1.4.356 1.111-.026 3.2-.137 4.289-.299 1.09-.162 1.18-.375 1.117-.682-.063-.308-.281-.711-.755-1.932a47.135 47.135 0 01-1.087-3.068c-.14-.449-.217-.445-.636-.266-.727.31-1.576.577-2.333.822-.887.288-1.75.556-2.649.806-.451.126-.413.237-.311.668.24 1.02.47 2.123.78 3.107.052.166.11.33.185.488zM.066 1.48c.092-.102.262-.125 2.343-.304s6.073-.514 8.1-.679C12.533.333 12.595.34 12.646.4c.051.06.092.174.197.991.105.817.274 2.337.342 3.116.068.78.034.82-.425.858-.458.037-1.341.07-1.872.095-.53.024-.707.038-.79.085-.083.047-.072.127-.057.225.014.098.032.215.092.667.06.453.162 1.241.244 3.038.015.332.026.649.052.98.074.962-.335.713-1.046.594-1.107-.184-2.227-.353-3.336-.529-.218-.034-.417-.06-.634-.088-.611-.08-.534-.408-.51-.917.013-.309.007-.647.006-.958v-.041C4.9 6.93 4.818 6.42 4.743 6.158c-.075-.261-.143-.275-.634-.271-.492.004-1.406.025-1.943.06-.537.034-.697.08-.82.017-.121-.064-.205-.238-.432-.927A51.01 51.01 0 01.14 2.455c-.178-.692-.165-.873-.073-.975zm10.17 15.486c-.286 2.888-.92 5.856-1.326 7.635-.407 1.778-.589 2.367-.746 2.69-.157.324-.29.383-1.4.357-1.11-.026-3.199-.137-4.288-.299-1.09-.162-1.181-.375-1.118-.683.064-.308.282-.71.755-1.931.474-1.22 1.203-3.26 1.691-4.948.379-1.313.655-2.572.78-3.933.017-.172.012-.476.226-.504.126-.017.599.043.767.051 1.22.06 2.508.075 3.73.05.228-.005.764-.083.933.049.193.152.077.666.051.887-.022.191-.037.387-.056.58zM15.561.237c.869-.056 2.517-.167 3.42-.212.903-.046 1.06-.026 1.134.041.075.067.068.181.123 2.204.07 2.572.138 5.14.181 7.713.008.446.137.764-.413.885-.373.083-.501-.066-.492-.445l.002-.072c.013-.282.099-.702.092-1.078a2.02 2.02 0 00-.24-.94c-.132-.233-.297-.366-.41-.2-.112.166-.172.63-.305 1.065-.133.435-.34.842-.464 1.169-.125.327-.167.575-.287.786-.12.211-.317.386-.605.518-.57.257-1.43.17-2.044.148-.681-.024-.57-.293-.553-.852.03-.973.03-1.975.035-2.95l.002-1.062a101.296 101.296 0 00-.12-4.994C14.57.983 14.543.638 14.573.465c.03-.172.12-.172.988-.228zm4.201 20.343c.081.271.06.422-.017.51-.077.09-.207.117-.882.054-.675-.064-1.894-.218-2.59-.262-.696-.044-.869.023-.955.134-.087.112-.087.268-.079.39.009.122.026.211.556.309s1.573.204 2.164.285c.592.08.733.135.798.215.065.08.053.185.038.302-.014.118-.031.247-.662.318-.63.071-1.875.084-2.527.152-.653.068-.715.192-.75.346-.037.153-.048.336.383.4.432.065 1.305.01 1.972.005s1.127.038 1.373.163.279.332-.055.48c-.332.149-1.03.24-1.65.308-.62.069-1.163.115-1.435.212-.273.096-.277.242-.225.372.052.13.16.244.774.237.614-.006 1.735-.133 2.365-.195.63-.062.77-.059.873 0 .103.06.17.176-.136.415-.306.24-.984.601-1.41.843-.428.242-.604.362-.655.511-.051.149.023.325.35.285.326-.04.904-.296 1.577-.63.673-.335 1.44-.747 1.995-1.073.553-.327.893-.568 1.09-.78.197-.214.25-.398.813-.489.563-.09 1.635-.087 2.845-.135.67-.027 1.323-.06 1.99-.133.462-.05.49.077.378.503-.413 1.563-1.386 2.743-2.816 3.523a6.636 6.636 0 01-2.18.733c-.993.15-2.56.15-3.553 0-2.14-.323-4.149-1.718-4.854-3.788-.177-.52-.265-1.084-.293-1.816-.027-.731.007-1.63.058-2.912.019-.473.135-5.044.207-5.167.102-.173.518-.166.71-.19.676-.086 1.404-.266 2.081-.3.569-.026.665.144.908.313.43.291 1.085.494 1.583.64.589.17.522.45.495.982-.04.834-.014 1.675-.025 2.509-.003.293-.048.175-.15-.026-.092-.182-.352-.807-.54-.861-.26-.075-.338.593-.341.757-.011.616.231.997.404 1.551zm2.387-5.553c-.007-.3.069-.264.368-.246.55.032 1.16.046 1.71.01.57-.042.647-.176.666-.314.02-.137-.019-.28-.37-.359-.715-.14-1.42-.083-2.107-.196-.31-.05-.29-.17-.286-.446.004-.396.053-.445.429-.517.588-.11 1.253-.208 1.825-.353.098-.025.19-.051.284-.085.404-.15.349-.327.277-.47-.072-.143-.162-.252-.812-.187-.607.065-1.189.185-1.788.28-.257.042-.214-.034-.213-.293.001-.155-.032-.562.093-.666.111-.092.418-.17.567-.217.282-.095.575-.198.85-.31.492-.204.488-.294.466-.416-.021-.122-.059-.274-.17-.366-.28-.213-1.123.12-1.447.218-.37.112-.337-.119-.322-.419.035-.718.034-1.466.05-2.187.038-1.74.087-3.478.134-5.218.055-2.023.048-2.137.123-2.204.075-.067.232-.087 1.134-.041.903.045 2.552.156 3.42.212.869.056.957.056.988.228.03.173.003.518-.044 1.496-.048.977-.116 2.588-.12 4.994a317.9 317.9 0 00.123 8.039c.04 1.488.073 3.003.163 4.487.042.698-3.261 1.49-4.085 1.715-.451.121-1.296.339-1.746.236-.19-.043-.136-.245-.128-.41.084-1.938.012-4.06-.032-5.995zM43.773 16.48c1.185 0 2.146-.946 2.146-2.114 0-1.167-.961-2.113-2.146-2.113-1.186 0-2.146.946-2.146 2.113 0 1.168.96 2.114 2.146 2.114z"
            fill="#383838"
        />
        <path
            d="M49.523 11.623a.97.97 0 01-1.313-.357.94.94 0 01.362-1.293 4.45 4.45 0 012.15-.54c.628 0 1.25.127 1.785.364.588.26 1.078.66 1.38 1.184.2.35.314.743.314 1.171v5.01a.958.958 0 01-.965.95.96.96 0 01-.963-.878c-.34.539-.968.878-2.096.878-2.093 0-2.833-1.169-2.833-2.611 0-1.443.94-2.612 2.833-2.612 1.084 0 1.734.383 2.093.98v-1.717a.466.466 0 00-.058-.235c-.09-.155-.267-.287-.497-.389a2.483 2.483 0 00-.992-.192c-.424 0-.85.091-1.2.287zm2.747 3.842v-.411c-.136-.452-.71-.79-1.398-.79-.788 0-1.428.445-1.428.996 0 .55.64.996 1.428.996.688 0 1.262-.34 1.398-.79zM56.567 11.482c-.535 0-.969-.45-.969-1.004 0-.555.434-1.005.969-1.005h5.14c.535 0 .969.45.969 1.005 0 .275-.107.524-.28.706l-4.045 4.903h3.182c.535 0 .97.45.97 1.004 0 .555-.434 1.005-.97 1.005H56.25v-.003a.943.943 0 01-.628-.24 1.028 1.028 0 01-.106-1.413l4.09-4.958h-3.04z"
            fill="#383838"
        />
    </svg>
);

export const FooterYoutubeIcon = (props) => (
    <svg
        width={25}
        height={19}
        viewBox="0 0 25 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M24.478 3.016c-.288-1.108-1.135-1.981-2.21-2.278C20.317.2 12.5.2 12.5.2S4.682.2 2.733.738C1.657 1.035.81 1.908.523 3.016 0 5.026 0 9.218 0 9.218s0 4.193.522 6.202a3.132 3.132 0 002.21 2.242c1.95.538 9.768.538 9.768.538s7.818 0 9.767-.538a3.132 3.132 0 002.21-2.242C25 13.41 25 9.218 25 9.218s0-4.192-.522-6.202zM9.943 13.024V5.412l6.534 3.806-6.534 3.806z"
            fill="#BD2263"
        />
    </svg>
);

export const FooterLinkedinIcon = (props) => (
    <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M17.829.8H1.367C.613.8 0 1.396 0 2.127v15.746c0 .732.613 1.327 1.367 1.327H17.83c.754 0 1.371-.595 1.371-1.327V2.127C19.2 1.396 18.583.8 17.829.8zM5.803 16.572H2.957V7.79h2.85v8.782h-.004zM4.38 6.591c-.913 0-1.65-.711-1.65-1.582 0-.87.737-1.581 1.65-1.581.909 0 1.65.71 1.65 1.58 0 .876-.737 1.582-1.65 1.582zm12.09 9.98h-2.846V12.3c0-1.019-.021-2.329-1.478-2.329-1.483 0-1.71 1.11-1.71 2.255v4.345H7.59v-8.78h2.73V8.99h.039c.381-.69 1.311-1.417 2.695-1.417 2.88 0 3.416 1.82 3.416 4.185v4.814z"
            fill="#5D9DB1"
        />
    </svg>
);

export const FooterTwitterIcon = (props) => (
    <svg
        width={18}
        height={16}
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M15.79 4.09a7.8 7.8 0 01.012.511c0 5.202-3.63 11.196-10.263 11.196A9.586 9.586 0 010 14.03c.29.037.57.05.871.05 1.686 0 3.239-.622 4.478-1.682-1.586-.037-2.914-1.17-3.372-2.729.223.037.446.061.68.061.325 0 .649-.049.95-.134C1.954 9.23.715 7.646.715 5.734v-.049c.48.293 1.038.475 1.63.5C1.374 5.478.737 4.272.737 2.908c0-.731.179-1.401.491-1.986C3.004 3.31 5.673 4.869 8.666 5.04a4.83 4.83 0 01-.09-.902c0-2.168 1.609-3.935 3.608-3.935 1.038 0 1.976.475 2.635 1.243.815-.17 1.597-.5 2.29-.95a3.882 3.882 0 01-1.586 2.168 6.762 6.762 0 002.077-.61 8.175 8.175 0 01-1.81 2.035z"
            fill="#53D1E2"
        />
    </svg>
);


export const FooterFacebookIcon = (props) => (
    <svg
        width={10}
        height={18}
        viewBox="0 0 10 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8.97 10.1l.499-3.185H6.356V4.848c0-.872.435-1.721 1.829-1.721H9.6V.415S8.316.2 7.088.2C4.525.2 2.85 1.726 2.85 4.487v2.428H0V10.1h2.85v7.7h3.506v-7.7h2.615z"
            fill="#4391DA"
        />
    </svg>
);

export const FooterInstagramIcon = (props) => (
    <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8.802 4.488A4.505 4.505 0 004.291 9a4.505 4.505 0 004.511 4.512A4.505 4.505 0 0013.313 9a4.505 4.505 0 00-4.511-4.512zm0 7.446A2.939 2.939 0 015.869 9a2.936 2.936 0 012.933-2.934A2.936 2.936 0 0111.735 9a2.939 2.939 0 01-2.933 2.934zm5.748-7.631a1.05 1.05 0 01-1.052 1.052 1.052 1.052 0 111.052-1.053zm2.988 1.068c-.067-1.41-.389-2.659-1.421-3.688C15.088.655 13.839.333 12.43.262c-1.453-.083-5.807-.083-7.26 0C3.764.329 2.516.65 1.483 1.68.451 2.708.133 3.957.062 5.367c-.083 1.453-.083 5.809 0 7.262.067 1.41.389 2.659 1.421 3.687 1.033 1.03 2.277 1.351 3.687 1.422 1.453.083 5.807.083 7.26 0 1.41-.067 2.658-.389 3.687-1.422 1.028-1.028 1.35-2.277 1.421-3.687.083-1.453.083-5.805 0-7.258zm-1.877 8.817a2.97 2.97 0 01-1.672 1.673c-1.159.46-3.907.353-5.187.353-1.28 0-4.032.102-5.187-.353a2.97 2.97 0 01-1.672-1.673c-.46-1.159-.354-3.908-.354-5.188 0-1.28-.102-4.033.354-5.188a2.97 2.97 0 011.672-1.673c1.159-.46 3.907-.353 5.187-.353 1.28 0 4.032-.103 5.187.353.77.306 1.362.9 1.672 1.673.46 1.159.354 3.908.354 5.188 0 1.28.106 4.033-.354 5.188z"
            fill="url(#prefix__paint0_linear)"
        />
        <defs>
            <linearGradient
                id="prefix__paint0_linear"
                x1={4}
                y1={-5.5}
                x2={8}
                y2={22}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.2} stopColor="#405DE6"/>
                <stop offset={0.257} stopColor="#5851DB"/>
                <stop offset={0.308} stopColor="#833AB4"/>
                <stop offset={0.394} stopColor="#C13584"/>
                <stop offset={0.486} stopColor="#E1306C"/>
                <stop offset={0.554} stopColor="#FD1D1D"/>
                <stop offset={0.619} stopColor="#F56040"/>
                <stop offset={0.695} stopColor="#F77737"/>
                <stop offset={0.75} stopColor="#FCAF45"/>
                <stop offset={0.814} stopColor="#FFDC80"/>
            </linearGradient>
        </defs>
    </svg>
);


export const FooterCallImg = (props) => (
    <svg
        width={48}
        height={51}
        viewBox="0 0 48 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M18 20.719c0-1.76-1.343-3.188-3-3.188h-1.5c-3.314 0-6 2.854-6 6.375v4.782c0 3.52 2.686 6.375 6 6.375H15c1.657 0 3-1.428 3-3.188V20.719zm16.5 14.343c3.314 0 6-2.853 6-6.374v-4.782c0-3.52-2.686-6.375-6-6.375H33c-1.657 0-3 1.428-3 3.188v11.156c0 1.76 1.343 3.188 3 3.188h1.5zM24 0C10.61 0 .43 11.837 0 25.5v1.594c0 .88.671 1.593 1.5 1.593H3c.829 0 1.5-.713 1.5-1.593V25.5C4.5 14.076 13.248 4.781 24 4.781S43.5 14.076 43.5 25.5h-.011c.007.242.011 16.507.011 16.507 0 2.326-1.775 4.212-3.964 4.212H30c0-2.64-2.015-4.782-4.5-4.782h-3c-2.485 0-4.5 2.141-4.5 4.782C18 48.859 20.015 51 22.5 51h17.036C44.211 51 48 46.974 48 42.007V25.5C47.57 11.837 37.39 0 24 0z"
            fill="#8D8D8D"
        />
    </svg>
);


export const FooterHomePhoneIcon = (props) => (
    <svg
        width={15}
        height={12}
        viewBox="0 0 15 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M7.368 2.192c2.456.024 3.994-.129 4.202 2.593h2.995C14.565.568 10.887 0 7.29 0 3.692 0 .015.568.015 4.785h2.971c.23-2.774 1.946-2.617 4.382-2.593zM1.5 6.141c.73 0 1.336.044 1.471-.674C2.99 5.37 3 5.26 3 5.131H0c0 1.068.672 1.01 1.5 1.01zM11.59 5.131h-.029c0 .13.011.24.032.336.143.662.749.62 1.476.62.832 0 1.507.056 1.507-.956h-2.987z"
            fill="#B90D5D"
        />
        <path
            d="M10.126 4.404V3.98c0-.19-.218-.201-.488-.201h-.441c-.27 0-.488.012-.488.201v.649H5.59V3.98c0-.19-.218-.201-.488-.201h-.441c-.27 0-.488.012-.488.201v.794c-.71.739-3.035 3.882-3.12 4.262l.001 2.539c0 .234.191.425.426.425h11.34c.234 0 .425-.19.425-.425V9.023c-.084-.37-2.408-3.51-3.119-4.249v-.37zm-4.69 4.974a.413.413 0 110-.827.413.413 0 010 .827zm0-1.418a.413.413 0 110-.826.413.413 0 010 .826zm0-1.417a.413.413 0 110-.827.413.413 0 010 .827zm1.702 2.835a.413.413 0 110-.827.413.413 0 010 .827zm0-1.418a.413.413 0 110-.826.413.413 0 010 .826zm0-1.417a.413.413 0 110-.827.413.413 0 010 .827zm1.7 2.835a.413.413 0 110-.827.413.413 0 010 .827zm0-1.418a.413.413 0 110-.826.413.413 0 010 .826zm0-1.417a.413.413 0 110-.826.413.413 0 010 .826z"
            fill="#B90D5D"
        />
    </svg>
);


export const FooterMobilePhoneIcon = (props) => (
    <svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M11.037 7.877a6.813 6.813 0 01-2.14-.341c-.335-.114-.746-.01-.95.2l-1.35 1.019C5.032 7.92 4.068 6.956 3.244 5.403l.99-1.314a.97.97 0 00.238-.983A6.824 6.824 0 014.13.963.964.964 0 003.167 0H.963A.964.964 0 000 .963C0 7.049 4.951 12 11.037 12c.531 0 .963-.432.963-.963V8.84a.964.964 0 00-.963-.962z"
            fill="#B90D5D"
        />
    </svg>
);


export const FooterEnvelopeIcon = (props) => (
    <svg
        width={15}
        height={12}
        viewBox="0 0 15 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M14.389 3.962c.112-.096.278-.006.278.147V10.5c0 .828-.616 1.5-1.375 1.5H1.375C.615 12 0 11.328 0 10.5V4.112c0-.156.163-.243.278-.146.642.543 1.492 1.234 4.414 3.55.605.48 1.624 1.493 2.641 1.487 1.023.01 2.063-1.025 2.644-1.487 2.922-2.316 3.77-3.01 4.412-3.554zM7.333 8c.665.012 1.622-.912 2.103-1.294 3.801-3.01 4.09-3.272 4.967-4.022a.774.774 0 00.264-.59V1.5c0-.828-.616-1.5-1.375-1.5H1.375C.615 0 0 .672 0 1.5v.594a.78.78 0 00.264.59c.876.747 1.165 1.013 4.967 4.022.481.381 1.438 1.306 2.102 1.294z"
            fill="#B90D5D"
        />
    </svg>
);

export const HeaderLikeHeartIcon = (props) => (
<svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.993 4.156c-2-2.36-5.333-2.994-7.838-.834s-2.858 5.772-.89 8.327c1.635 2.125 6.585 6.605 8.207 8.055.182.162.272.243.378.275a.499.499 0 0 0 .286 0c.106-.032.197-.113.378-.275 1.623-1.45 6.573-5.93 8.208-8.055 1.967-2.555 1.658-6.19-.89-8.327-2.549-2.137-5.84-1.525-7.839.834Z"
      clipRule="evenodd"
    />
  </svg>
)

export const CardLikeIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={22}
        height={21}
        fill="none"
        {...props}
      >
        <path
        //   stroke="#000"
          fill="#888"
          strokeLinecap="round"
          strokeLinejoin="round"
        //   strokeWidth={1}
          d="M10.993 4.156c-2-2.36-5.333-2.994-7.838-.834s-2.858 5.772-.89 8.327c1.635 2.125 6.585 6.605 8.207 8.055.182.162.272.243.378.275a.499.499 0 0 0 .286 0c.106-.032.197-.113.378-.275 1.623-1.45 6.573-5.93 8.208-8.055 1.967-2.555 1.658-6.19-.89-8.327-2.549-2.137-5.84-1.525-7.839.834Z"
          clipRule="evenodd"
        />
      </svg>
    )

    export const CardLikeFullIcon = (props) => {
        return (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={22}
            height={21}
            fill="none"
            {...props}
          >
            <path
              stroke="#D10024"
              fill="#D10024"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M10.993 4.156c-2-2.36-5.333-2.994-7.838-.834s-2.858 5.772-.89 8.327c1.635 2.125 6.585 6.605 8.207 8.055.182.162.272.243.378.275a.499.499 0 0 0 .286 0c.106-.032.197-.113.378-.275 1.623-1.45 6.573-5.93 8.208-8.055 1.967-2.555 1.658-6.19-.89-8.327-2.549-2.137-5.84-1.525-7.839.834Z"
              clipRule="evenodd"
            />
            </svg>
        )
    }

export const HeaderBasketIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={21}
      fill="none"
      {...props}
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={2}
        d="M1 1h.606a2 2 0 0 1 1.989 1.783l.81 7.434A2 2 0 0 0 6.394 12h8.652a2 2 0 0 0 1.938-1.506l1.402-7.31a.5.5 0 0 0-.491-.595H3.564m1.06 13.036h.75m-.75.75h.75m10.25-.75h.75m-.75.75h.75M6 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  )
  
  export const CardBasketIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={18}
      fill="none"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth={2}
        d="M1 1h.606a2 2 0 0 1 1.989 1.783l.81 7.434A2 2 0 0 0 6.394 12h8.652a2 2 0 0 0 1.938-1.506l1.402-7.31a.5.5 0 0 0-.491-.595H3.564m1.06 13.036h.75m-.75.75h.75m10.25-.75h.75m-.75.75h.75M6 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm11 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  )
  
  export const PlayLogo = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={28}
    viewBox="0 0 32 32" 
    {...props}>
      <path
        fill="#D10024"
        d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1Zm6.13 17.6L14.54 23a2.95 2.95 0 0 1-3 0 3 3 0 0 1-1.5-2.6v-8.78A3 3 0 0 1 14.54 9l7.59 4.38a3 3 0 0 1 0 5.2Z"
      />
    </svg>
  )
 

  export const CartCheckout = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={20}
      fill="green"
      className="bi bi-cart-check-fill"
      {...props}
    >
      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
    </svg>
  )
 

  export const DeletedIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      fill="currentColor"
      className="bi bi-x-lg"
      {...props}
    >
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
    </svg>
  )
  
  export const IncrementPlusIcon = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="currentColor"
    className="bi bi-plus-lg"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
    />
  </svg>
  )


  export const DecrementMinusIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="bi bi-dash-lg"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
      />
    </svg>
  )
  