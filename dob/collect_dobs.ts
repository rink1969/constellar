curl 'https: //testnet-api.explorer.nervos.org/api/v2/nft/collections/0xb7817c2ef77b9c8ef1575af0a92e21fdf3d399c08e8b0e94ffc37bf4268d18e4' \
-H 'accept: application/vnd.api+json' \
-H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8' \
-H 'if-none-match: W/"6d08250b7e94421f18083f0f65863795"' \
-H 'origin: https: //testnet.explorer.nervos.org' \
-H 'priority: u=1, i' \
-H 'referer: https: //testnet.explorer.nervos.org/' \
-H 'sec-ch-ua: "Chromium";v="134",
"Not:A-Brand";v="24",
"Google Chrome";v="134"' \
-H 'sec-ch-ua-mobile: ?0' \
-H 'sec-ch-ua-platform: "Windows"' \
-H 'sec-fetch-dest: empty' \
-H 'sec-fetch-mode: cors' \
-H 'sec-fetch-site: same-site' \
-H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'


{
    "id": 19613,
    "standard": "spore",
    "name": "Rock Web5",
    "description": "Rock Web5 Code Campaign.",
    "icon_url": null,
    "creator": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
    "items_count": 19,
    "holders_count": 15,
    "h24_ckb_transactions_count": 0,
    "type_script": {
        "args": "0x664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f",
        "code_hash": "0x0bbe768b519d8ea7b96d58f1182eb7e6ef96c541fbd9526975077ee09f049058",
        "hash_type": "data1",
        "script_hash": "0xb7817c2ef77b9c8ef1575af0a92e21fdf3d399c08e8b0e94ffc37bf4268d18e4"
    },
    "timestamp": 1742310054495,
    "sn": "0xb7817c2ef77b9c8ef1575af0a92e21fdf3d399c08e8b0e94ffc37bf4268d18e4",
    "tags": [
        "rgb++",
        "layer-2-asset"
    ]
}



curl 'https: //testnet-api.explorer.nervos.org/api/v2/nft/transfers?page=1&collection_id=0xb7817c2ef77b9c8ef1575af0a92e21fdf3d399c08e8b0e94ffc37bf4268d18e4' \
  -H 'accept: application/vnd.api+json' \
  -H 'accept-language: zh-CN,zh;q=0.9,en;q=0.8' \
  -H 'if-none-match: W/"8ffc1b1c65bab1dd8531771d0474032d"' \
  -H 'origin: https: //testnet.explorer.nervos.org' \
  -H 'priority: u=1, i' \
  -H 'referer: https: //testnet.explorer.nervos.org/' \
  -H 'sec-ch-ua: "Chromium";v="134",
"Not:A-Brand";v="24",
"Google Chrome";v="134"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-site' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'

{
    "data": [
        {
            "id": 473469,
            "from": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq96x4yqp655y3y402up5d7qru50v0lmwrvn56u6k",
            "item": {
                "id": 209576,
                "token_id": "56048787025832523539952946895014282914006793171113090897557293286810911678440",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq96x4yqp655y3y402up5d7qru50v0lmwrvn56u6k",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x13ecaf93af48c4b790e6ef88e786b599914154dc931ed4fdb409bc67a707e25c",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x7bea7d3fbf74a193d974fa3bdb05353ca415bdc95de9f257f7816940fae69fe8",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x734f49365721fcf989b09f9529d7225251bd79cf9a5d46dbee279ec1910cd325"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:25:42.554+08:00",
                "updated_at": "2025-03-19T14:26:30.759+08:00"
            },
            "action": "normal",
            "transaction": {
                "tx_hash": "0x13ecaf93af48c4b790e6ef88e786b599914154dc931ed4fdb409bc67a707e25c",
                "block_number": 16580873,
                "block_timestamp": 1742365587492
            }
        },
        {
            "id": 473468,
            "from": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqqxsh4vgwnetry8dvf392yvczhvw22ngk0c0f75g7",
            "item": {
                "id": 209572,
                "token_id": "95879985261059149543610947818386446354825777519849603272220804745706514490348",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqqxsh4vgwnetry8dvf392yvczhvw22ngk0c0f75g7",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x5f7483fee07263b42fb598a0a8920c5139675191b040e2ddc423d8c7eb8967c4",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0xd3fa260694d6917ffa9758a25742f3d7fc6f7c4e529e7db49d22011e9a4123ec",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x501ce93542eecb3b5d27e928815d5c6e1f68fb869f333d81368f801b28e48d04"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:25:26.527+08:00",
                "updated_at": "2025-03-19T14:26:25.736+08:00"
            },
            "action": "normal",
            "transaction": {
                "tx_hash": "0x5f7483fee07263b42fb598a0a8920c5139675191b040e2ddc423d8c7eb8967c4",
                "block_number": 16580872,
                "block_timestamp": 1742365580095
            }
        },
        {
            "id": 473466,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209576,
                "token_id": "56048787025832523539952946895014282914006793171113090897557293286810911678440",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq96x4yqp655y3y402up5d7qru50v0lmwrvn56u6k",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x13ecaf93af48c4b790e6ef88e786b599914154dc931ed4fdb409bc67a707e25c",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x7bea7d3fbf74a193d974fa3bdb05353ca415bdc95de9f257f7816940fae69fe8",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x734f49365721fcf989b09f9529d7225251bd79cf9a5d46dbee279ec1910cd325"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:25:42.554+08:00",
                "updated_at": "2025-03-19T14:26:30.759+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0xf045a1a416e4d6549568d3b74fad06b7a19a626ad181162d5778233d3bb480ae",
                "block_number": 16580866,
                "block_timestamp": 1742365539395
            }
        },
        {
            "id": 473467,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209575,
                "token_id": "112432641016048681591317336892343905322491507592319634274159682586855754737700",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x55fe1ac70446b0c0e6c0fe67d4499a56d24e85b98983ef04058ab7bbe7c22661",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0xf8929ea3f295026a07635b2f48c20bffe0ba2e8686cf3c21409b901609f8a824",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x7ea1c9365fe5782d6d230103335d40ab41d647751197b6a6b973901e66b8216c"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:25:42.538+08:00",
                "updated_at": "2025-03-19T14:25:42.538+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0x55fe1ac70446b0c0e6c0fe67d4499a56d24e85b98983ef04058ab7bbe7c22661",
                "block_number": 16580866,
                "block_timestamp": 1742365539395
            }
        },
        {
            "id": 473465,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209574,
                "token_id": "18568699681466467038501558425180412291268769440811030916314084925534500754552",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x0d82bcdf836afec516d68349b4121f8e64f374b3d7f717f9e551aed02ddbcf5d",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x290d82f6b00881fd1b26ff3f633af232d64c1f80e53caeaeae358862976f1478",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x9bec479a5cb05223c09b5245d2838d64374f8579f06cbb3c3a366d15a37abcd3"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:25:42.534+08:00",
                "updated_at": "2025-03-19T14:25:42.534+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0x0d82bcdf836afec516d68349b4121f8e64f374b3d7f717f9e551aed02ddbcf5d",
                "block_number": 16580866,
                "block_timestamp": 1742365539395
            }
        },
        {
            "id": 473464,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209573,
                "token_id": "63309696472131205976938949494078745528234385063637792497370299560407032777348",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x1ff9c33b6857ccc0a67b3e2d0ad9565bf95d1b950ebfba83ac6054a159a8d70c",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x8bf804b3869cabf6d3e66ca48658159f38a84dfd5691e7d1d3614b6ea51dca84",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x04d25e8cd20308f102bf542d1bc86e20f1e7ec2e04ac87f37f364d96b5f8166f"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:25:42.519+08:00",
                "updated_at": "2025-03-19T14:25:42.519+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0x1ff9c33b6857ccc0a67b3e2d0ad9565bf95d1b950ebfba83ac6054a159a8d70c",
                "block_number": 16580866,
                "block_timestamp": 1742365539395
            }
        },
        {
            "id": 473463,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209572,
                "token_id": "95879985261059149543610947818386446354825777519849603272220804745706514490348",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqqxsh4vgwnetry8dvf392yvczhvw22ngk0c0f75g7",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x5f7483fee07263b42fb598a0a8920c5139675191b040e2ddc423d8c7eb8967c4",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0xd3fa260694d6917ffa9758a25742f3d7fc6f7c4e529e7db49d22011e9a4123ec",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x501ce93542eecb3b5d27e928815d5c6e1f68fb869f333d81368f801b28e48d04"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:25:26.527+08:00",
                "updated_at": "2025-03-19T14:26:25.736+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0x99e49b3fc4c50806ea70b8b1a6d0f674e03322eb5c70de548d3313a4a51c973b",
                "block_number": 16580864,
                "block_timestamp": 1742365524194
            }
        },
        {
            "id": 473461,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209570,
                "token_id": "4915497599187764757841289521329862597169909341735630799317971864418111884",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x0f37e2b0e295abb8059bd6da9b013ac510fb3337f870607487acf1572dcfc385",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x0002c835f0750b85b49fc74420ef0d7bedb8790c30594b4cc13e7274b111d18c",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0xae8747fa9d270f1e714f846666708f98022d0a00e74c867af5201c92def0286a"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:25:08.313+08:00",
                "updated_at": "2025-03-19T14:25:08.313+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0x0f37e2b0e295abb8059bd6da9b013ac510fb3337f870607487acf1572dcfc385",
                "block_number": 16580863,
                "block_timestamp": 1742365506738
            }
        },
        {
            "id": 473462,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209571,
                "token_id": "79852671742326524935584197378000109528720054387116637793606095315637866507772",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0xb0543f47212909b27932fcf047d90315bb2fac5f6ca3c1cb1cc416cc497d3451",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0xb08b02b3c12e3fd37915a1dfce10a8bc3995cfa859b0e4e0c3932563a9eaadfc",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x17f42aa196656bd854579a3fec19ab1eefd5751f559a9868a4b766163a405acb"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:25:08.390+08:00",
                "updated_at": "2025-03-19T14:25:08.390+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0xb0543f47212909b27932fcf047d90315bb2fac5f6ca3c1cb1cc416cc497d3451",
                "block_number": 16580863,
                "block_timestamp": 1742365506738
            }
        },
        {
            "id": 473459,
            "from": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8639u90ahe5fddkm4plfqajfv0cg4j6pgnzju0y",
            "item": {
                "id": 209549,
                "token_id": "36790683577051201610166318612139696003433089867499286439678340455753427436841",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8639u90ahe5fddkm4plfqajfv0cg4j6pgnzju0y",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0xf1837073b6854c3c089181e1b7fc40a3ebf23a043ade1f23a659fb6613dbf56f",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x5156c9fa1eb3bea11f1e949e618483a587e996a96dc462197cc0856521ffc529",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0xa68917d169eb4badeb66c04fa437a25ce9aa33b48f3a0ddebe0135af4725f681"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-18T23:01:02.910+08:00",
                "updated_at": "2025-03-19T14:17:59.199+08:00"
            },
            "action": "normal",
            "transaction": {
                "tx_hash": "0xf1837073b6854c3c089181e1b7fc40a3ebf23a043ade1f23a659fb6613dbf56f",
                "block_number": 16580803,
                "block_timestamp": 1742365076095
            }
        },
        {
            "id": 473458,
            "from": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqqx7q9tz68yguwqsgnj2g38xqux8sgerpfvy9z2wu",
            "item": {
                "id": 209566,
                "token_id": "5890804541258751552720940961949751070706280789357918352686128439351319989165",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqqx7q9tz68yguwqsgnj2g38xqux8sgerpfvy9z2wu",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x46ea55aba25fe2af95515d974f8430c3425ce3c87f6128edc232acf58a07f971",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x0d0613c45e8d4c85297a3897b1ddac9d48639c1d080f1be86d25a87b9e940bad",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x9b08d14bcd294e1f0f21de83cff38807b6ab42efb377d313aaec026fcfdcb533"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:06:07.948+08:00",
                "updated_at": "2025-03-19T14:17:50.584+08:00"
            },
            "action": "normal",
            "transaction": {
                "tx_hash": "0x46ea55aba25fe2af95515d974f8430c3425ce3c87f6128edc232acf58a07f971",
                "block_number": 16580802,
                "block_timestamp": 1742365068095
            }
        },
        {
            "id": 473457,
            "from": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqqxh3gxj5f473e4ynf6077unk93lv8fa5ncm2twuj",
            "item": {
                "id": 209568,
                "token_id": "33986524942710817068966714886047514631398281910965469927135153804383337200086",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqqxh3gxj5f473e4ynf6077unk93lv8fa5ncm2twuj",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0xad7276b647413782023301e85112c0742ab4a9b292e547f77520b53a030a40fc",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x4b23b101947739da2c5a0aa10e55ac830279a87d7df0fdd43a59267bf9d239d6",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x45ce57b73494ed114eb15e6367d183a93333ece041ec0b0eadc24af2c092a794"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:06:12.244+08:00",
                "updated_at": "2025-03-19T14:14:12.533+08:00"
            },
            "action": "normal",
            "transaction": {
                "tx_hash": "0xad7276b647413782023301e85112c0742ab4a9b292e547f77520b53a030a40fc",
                "block_number": 16580780,
                "block_timestamp": 1742364848234
            }
        },
        {
            "id": 473456,
            "from": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "to": "ckt1qp4wtmsvhzrm9h66ngvpxuc4hx7u2klg65nr0vk7qcjqjt2lpjga2qgq486jgfsajzqfvu6lm5qzdstwy5zn0hnrpvq265",
            "item": {
                "id": 209569,
                "token_id": "2827492360130070883909061774396346864173314766342553355210280083271192370238",
                "owner": "ckt1qp4wtmsvhzrm9h66ngvpxuc4hx7u2klg65nr0vk7qcjqjt2lpjga2qgq486jgfsajzqfvu6lm5qzdstwy5zn0hnrpvq265",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x4416790ad83d9055fffa4e4b207575f04e3a3855990fdf2f99964aac60fe181d",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x06404dd0883bbcd77076dd79e697a47e001329efa1957479ae6c88b18fdb5c3e",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x418cd70263a2fcfd967b5e0aff471cacf746c30752b57085a22eb5a4bf13f80b"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:06:38.564+08:00",
                "updated_at": "2025-03-19T14:11:53.209+08:00"
            },
            "action": "normal",
            "transaction": {
                "tx_hash": "0x4416790ad83d9055fffa4e4b207575f04e3a3855990fdf2f99964aac60fe181d",
                "block_number": 16580765,
                "block_timestamp": 1742364708220
            }
        },
        {
            "id": 473455,
            "from": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq9d2feyj98clzqt2ha8tl8wumw3cuhvh9q6we2cd",
            "item": {
                "id": 209567,
                "token_id": "39612318664604515196875062054014364709191272005795243005868145075108090643861",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq9d2feyj98clzqt2ha8tl8wumw3cuhvh9q6we2cd",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x2c1905640832af908717bf3f840e8713c00e950b0ef980ea6110271c92c8d873",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x5793c7205660a3b1f94fae12281e1c7652014642eea4885fe9d297633eae8595",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x5c9910d3a96d8b4e2438a576a77fa7b6b234bf1f77ca292d3b54e82fb184a32a"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:06:12.222+08:00",
                "updated_at": "2025-03-19T14:08:19.919+08:00"
            },
            "action": "normal",
            "transaction": {
                "tx_hash": "0x2c1905640832af908717bf3f840e8713c00e950b0ef980ea6110271c92c8d873",
                "block_number": 16580743,
                "block_timestamp": 1742364495191
            }
        },
        {
            "id": 473454,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209569,
                "token_id": "2827492360130070883909061774396346864173314766342553355210280083271192370238",
                "owner": "ckt1qp4wtmsvhzrm9h66ngvpxuc4hx7u2klg65nr0vk7qcjqjt2lpjga2qgq486jgfsajzqfvu6lm5qzdstwy5zn0hnrpvq265",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x4416790ad83d9055fffa4e4b207575f04e3a3855990fdf2f99964aac60fe181d",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x06404dd0883bbcd77076dd79e697a47e001329efa1957479ae6c88b18fdb5c3e",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x418cd70263a2fcfd967b5e0aff471cacf746c30752b57085a22eb5a4bf13f80b"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:06:38.564+08:00",
                "updated_at": "2025-03-19T14:11:53.209+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0x5bd135886d40eef096a309b05a50d9a1ceb0031057659deb6a0bbf0f0e2b905c",
                "block_number": 16580729,
                "block_timestamp": 1742364395296
            }
        },
        {
            "id": 473452,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209567,
                "token_id": "39612318664604515196875062054014364709191272005795243005868145075108090643861",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq9d2feyj98clzqt2ha8tl8wumw3cuhvh9q6we2cd",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x2c1905640832af908717bf3f840e8713c00e950b0ef980ea6110271c92c8d873",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x5793c7205660a3b1f94fae12281e1c7652014642eea4885fe9d297633eae8595",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x5c9910d3a96d8b4e2438a576a77fa7b6b234bf1f77ca292d3b54e82fb184a32a"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:06:12.222+08:00",
                "updated_at": "2025-03-19T14:08:19.919+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0xbb434ff5caae7216cb76bbb33e730ca0cda76b06440bb56f9acdaf272be422eb",
                "block_number": 16580725,
                "block_timestamp": 1742364370208
            }
        },
        {
            "id": 473453,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209568,
                "token_id": "33986524942710817068966714886047514631398281910965469927135153804383337200086",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqqxh3gxj5f473e4ynf6077unk93lv8fa5ncm2twuj",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0xad7276b647413782023301e85112c0742ab4a9b292e547f77520b53a030a40fc",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x4b23b101947739da2c5a0aa10e55ac830279a87d7df0fdd43a59267bf9d239d6",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x45ce57b73494ed114eb15e6367d183a93333ece041ec0b0eadc24af2c092a794"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:06:12.244+08:00",
                "updated_at": "2025-03-19T14:14:12.533+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0xba89c807ba70e2b98be63d1ecfadc82c0e39dc14a2c554f377080a1c5b56ca28",
                "block_number": 16580725,
                "block_timestamp": 1742364370208
            }
        },
        {
            "id": 473451,
            "from": null,
            "to": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "item": {
                "id": 209566,
                "token_id": "5890804541258751552720940961949751070706280789357918352686128439351319989165",
                "owner": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqqx7q9tz68yguwqsgnj2g38xqux8sgerpfvy9z2wu",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x46ea55aba25fe2af95515d974f8430c3425ce3c87f6128edc232acf58a07f971",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x0d0613c45e8d4c85297a3897b1ddac9d48639c1d080f1be86d25a87b9e940bad",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x9b08d14bcd294e1f0f21de83cff38807b6ab42efb377d313aaec026fcfdcb533"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T14:06:07.948+08:00",
                "updated_at": "2025-03-19T14:17:50.584+08:00"
            },
            "action": "mint",
            "transaction": {
                "tx_hash": "0x4b7ffb18cb238b8532cc79bc7854fdecf562d9bd3d88c10f75bdeb1f0c5fedb4",
                "block_number": 16580724,
                "block_timestamp": 1742364366335
            }
        },
        {
            "id": 473450,
            "from": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "to": "ckt1qrejnmlar3r452tcg57gvq8patctcgy8acync0hxfnyka35ywafvkqgjtv3gljmq490huay7qrzt3q25lst7wpkaqqccppvh",
            "item": {
                "id": 209554,
                "token_id": "50265963519683945971960920290714398572214533144716969324141941190717080539300",
                "owner": "ckt1qrejnmlar3r452tcg57gvq8patctcgy8acync0hxfnyka35ywafvkqgjtv3gljmq490huay7qrzt3q25lst7wpkaqqccppvh",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x1f22c05e6ee1297979fd049d3186a84b795ff0f6e5e6cd7493d4d2888a673c39",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0x6f2186f2930cb05cf8f41d4c41de4463f0f671fa930b949c30b2061eb30f10a4",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x596fcf2eb21d9f674af3a74ac73083d63e2868eb541f2e3f776afd3da02be790"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T13:38:42.927+08:00",
                "updated_at": "2025-03-19T14:05:25.988+08:00"
            },
            "action": "normal",
            "transaction": {
                "tx_hash": "0x1f22c05e6ee1297979fd049d3186a84b795ff0f6e5e6cd7493d4d2888a673c39",
                "block_number": 16580720,
                "block_timestamp": 1742364323394
            }
        },
        {
            "id": 473449,
            "from": "ckt1qrfrwcdnvssswdwpn3s9v8fp87emat306ctjwsm3nmlkjg8qyza2cqgqq8tfmtd3hl2gj0haq54t24kgwtdpz5ffzukkny82",
            "to": "ckt1qrejnmlar3r452tcg57gvq8patctcgy8acync0hxfnyka35ywafvkqgy2qwh9zm9mxl5wpzdqgzqv6dwrs3xvkyqqqz9ujzl",
            "item": {
                "id": 209555,
                "token_id": "108522220004202053384162815639601004921125458714958818236793972454376787689765",
                "owner": "ckt1qrejnmlar3r452tcg57gvq8patctcgy8acync0hxfnyka35ywafvkqgy2qwh9zm9mxl5wpzdqgzqv6dwrs3xvkyqqqz9ujzl",
                "standard": "spore",
                "cell": {
                    "status": "live",
                    "tx_hash": "0x6eeaa6ef829e28d8821b2bd6baf67f2c6513b3523e7dad7b410bdf6ec931f2f0",
                    "cell_index": 0,
                    "data": "0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"
                },
                "type_script": {
                    "args": "0xefed665b42265b385e5a2af807b28864f0fc97937874f88e46212ec85af84125",
                    "code_hash": "0x685a60219309029d01310311dba953d67029170ca4848a4ff638e57002130a0d",
                    "hash_type": "data1",
                    "script_hash": "0x1737cca0c4849a6aecaa265ae7769b18e111551a71dfe6a2970d9555d32eba48"
                },
                "name": null,
                "metadata_url": null,
                "icon_url": null,
                "created_at": "2025-03-19T13:39:09.236+08:00",
                "updated_at": "2025-03-19T14:05:15.475+08:00"
            },
            "action": "normal",
            "transaction": {
                "tx_hash": "0x6eeaa6ef829e28d8821b2bd6baf67f2c6513b3523e7dad7b410bdf6ec931f2f0",
                "block_number": 16580719,
                "block_timestamp": 1742364312011
            }
        }
    ],
    "pagination": {
        "overflow": false,
        "vars": {
            "page": "1",
            "items": 20,
            "outset": 0,
            "size": [
                1,
                4,
                4,
                1
            ],
            "page_param": "page",
            "params": {},
            "fragment": "",
            "link_extra": "",
            "i18n_key": "pagy.item_name",
            "cycle": false,
            "overflow": "empty_page",
            "metadata": [
                "scaffold_url",
                "first_url",
                "prev_url",
                "page_url",
                "next_url",
                "last_url",
                "count",
                "page",
                "items",
                "vars",
                "pages",
                "last",
                "in",
                "from",
                "to",
                "prev",
                "next",
                "series"
            ],
            "count": 33
        },
        "count": 33,
        "page": 1,
        "outset": 0,
        "items": 20,
        "last": 2,
        "pages": 2,
        "offset": 0,
        "params": {},
        "from": 1,
        "to": 20,
        "in": 20,
        "prev": null,
        "next": 2
    }
}


这里能获取到data
就是create dobs时的data结构

比如 0xf60000001000000024000000d2000000100000006170706c69636174696f6e2f6a736f6eaa0000007b226e616d65223a224e616e2054616e67222c227265736f75726365223a7b2275726c223a2268747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f434b4246616e7344414f2f726f636b2d776562352d64656d6f2f726566732f68656164732f6d61696e2f6173736574732f3235303331362d726f636b2d776562352d6c756d612e77656270222c2274797065223a22696d6167652f77656270227d7d20000000664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f
按spore结构解开
{"contentType":"application/json","content":"{\n  \"name\": \"Nan Tang\",\n  \"resource\": {\n    \"url\": \"https://raw.githubusercontent.com/CKBFansDAO/rock-web5-demo/refs/heads/main/assets/250316-rock-web5-luma.webp\",\n    \"type\": \"image/webp\"\n  }\n}","clusterId":"0x664b6dc8a2814adca5d485630b7c20a772ae0e3872f2f37ed93a124fc6cbe56f"}

unpackToRawSporeData 方法并没有导出，直接按字符串匹配好了


https://testnet.explorer.nervos.org/nft-info/0xb7817c2ef77b9c8ef1575af0a92e21fdf3d399c08e8b0e94ffc37bf4268d18e4/0x7bea7d3fbf74a193d974fa3bdb05353ca415bdc95de9f257f7816940fae69fe8