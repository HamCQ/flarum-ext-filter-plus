<?php

/*
 * This file is part of fof/filter.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// use Flarum\Database\Migration;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

// return Migration::addColumns('posts', [
//     'auto_mod' => ['boolean', 'default' => 0],
// ]);


return [
    'up' => function (Builder $schema) {
        if (!$schema->hasColumn('posts', 'auto_mod')) {
            $schema->table('posts', function (Blueprint $table) use ($schema) {
                $table->boolean('auto_mod')->default(0);
            });
        }

    },
    'down' => function (Builder $schema) {
        
    },
];