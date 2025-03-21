import { ccc } from "@ckb-ccc/ccc";
import { client, signer } from "@ckb-ccc/playground";

function getExplorerTxUrl(txHash: string) {
    const isMainnet = client.addressPrefix === 'ckb';
    const baseUrl = isMainnet ? 'https://explorer.nervos.org' : 'https://testnet.explorer.nervos.org';
  
    return `${baseUrl}/transaction/${txHash}`
}

/**
 * create spore
 */

const imageBaseUrl = "https://raw.githubusercontent.com/rink1969/constellar/refs/heads/main/dob/assets/";

const clusterIds: string[] = ["0x4b16ee11e6f8cab210f59bf4322f665833d1965ed4bd0925201d775b96c0d9b1",
    "0x17e8047c1f868dbe991d533c0f8f4666143b68ba49a5485bcca624cbb353cb2b",
    "0x995fcad485a13919748c049ed5431063ecc8549e355db6d5189e811b1ed92b5a"];

const dobs = [
    /* dobs in cluster0 */
    [
        `{"name":"zizai in SeeDAO post 0","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
        `{"name":"zizai in SeeDAO post 1","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
        `{"name":"zizai in SeeDAO post 2","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
    ],
    /* dobs in cluster1 */
    [
        `{"name":"xiaoyao in SeeDAO post 0","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
        `{"name":"xiaoyao in SeeDAO post 1","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
        `{"name":"xiaoyao in SeeDAO post 2","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
        `{"name":"xiaoyao in SeeDAO post 3","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
        `{"name":"xiaoyao in SeeDAO post 4","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
    ],
    /* dobs in cluster2 */
    [
        `{"name":"yongxian in SeeDAO post 0","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
        `{"name":"yongxian in SeeDAO post 1","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
        `{"name":"yongxian in SeeDAO post 2","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
        `{"name":"yongxian in SeeDAO post 3","resource":{"url":"${imageBaseUrl}/whitepaper.png","type":"image/png"}}`,
    ]
];

for (let i = 0; i < clusterIds.length; i++) {
    for (let j = 0; j < dobs[i].length; j++) {
        const { tx: sporeTx, id: sporeId } = await ccc.spore.createSpore({
            signer,
            data: {
                contentType: 'application/json',
                content: ccc.bytesFrom(dobs[i][j], "utf8"),
                clusterId: clusterIds[i],
            },
            clusterMode: "clusterCell",
        });
        await sporeTx.completeFeeBy(signer, 2000n);
        const sporeTxHash = await signer.sendTransaction(sporeTx);
        console.log("Mint DOB tx sent:", sporeTxHash, `Spore ID: ${sporeId}`);
        await signer.client.waitTransaction(sporeTxHash);
        console.log("Mint DOB tx committed:", getExplorerTxUrl(sporeTxHash), `Spore ID: ${sporeId}`);
    }
}
