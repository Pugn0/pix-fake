const express = require('express');
const app = express();
const port = 3000;

app.get('/money-out/transfer/api/pix-account-unified-p2p/search', (req, res) => {
    const { type, id, action } = req.query;

    // Verifica se os parâmetros são iguais aos esperados
    if (type === 'cpf' && id === '4096541419' && action === 'da_pix_search_account') {
        const response = {
            "status": "success",
            "model": {
                "accounts": [{
                    "data": {
                        "key_type": "cpf",
                        "key_value": "4096541419"
                    },
                    "type": "banking",
                    "enabled": true,
                    "modal_name": "",
                    "avatar": {
                        "initials": "MA",
                        "initials_bakground_color": "#A5ABE7",
                        "url": "https://http2.mlstatic.com/storage/logos-api-admin/453a86e0-8bad-11ed-8374-8b2ce97d0724-xl.png",
                        "type": "success"
                    },
                    "details": [{
                        "type": "title",
                        "value": "Maria Eduarda Lima",
                        "icon": null,
                        "color": null
                    }, {
                        "type": "description",
                        "value": "Nu Pagamentos S.A.",
                        "icon": "money-out-pix",
                        "color": null
                    }, {
                        "type": "message",
                        "value": "Com dinheiro em conta. Você pode agendar.",
                        "icon": null,
                        "color": "success"
                    }]
                }]
            }
        };
        res.json(response);
    } else {
        res.status(404).send('Not Found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
